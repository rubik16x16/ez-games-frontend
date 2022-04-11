import { Component, OnInit, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { TeamsService } from 'src/app/services/teams.service';
import { Tournament } from 'src/app/models/tournament';
import { StripeService, StripePaymentElementComponent } from 'ngx-stripe';
import { StripeElementsOptions, PaymentIntent } from '@stripe/stripe-js';
import { StripePaysService } from 'src/app/services/stripe-pays.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-register-tournament-modal',
	templateUrl: './register-tournament-modal.component.html',
	styleUrls: ['./register-tournament-modal.component.scss']
})
export class RegisterTournamentModalComponent implements OnInit {

	teamForm = this.fb.group({
		name: ['', [
			Validators.required,
			Validators.minLength(4)
		]],
		players: [[]]
	});

	searchForm = this.fb.group({
		email: ['']
	});

	user: any = null;
	usersQuery: User[];
	searching: boolean = false;
	tournament: Tournament = null;

	errors: any;

	get name() { return this.teamForm.get('name') }
	get players() { return this.teamForm.get('players') }
	get email() { return this.searchForm.get('email') }

	@ViewChild(StripePaymentElementComponent) paymentElement: StripePaymentElementComponent;

	elementsOptions: StripeElementsOptions = {
		locale: 'en'
	};

	paying = false;

	constructor(
		@Inject(MAT_DIALOG_DATA) public data: any,
		public dialogRef: MatDialogRef<RegisterTournamentModalComponent>,
		private fb: FormBuilder,
		private authService: AuthService,
		private userService: UsersService,
		private teamsService: TeamsService,
		private stripeService: StripeService,
		private stripePaysService: StripePaysService
	) { }

	ngOnInit(): void {

		console.log(this.data);

		this.authService.authUser.subscribe(res => {

			this.user = res;
		});

		this.tournament = this.data.tournament;

		if(this.tournament.entry){

			this.stripePaysService.createPaymentIntent(this.tournament.entry).subscribe(res => {

				this.elementsOptions.clientSecret = res.client_secret;
				console.log(res);
			});
		}
	}

	searchUser(): void {

		if(!this.searching){

			console.log('search');

			this.searching = true;

			setTimeout(() => {

				if(!this.email.value){

					this.usersQuery = [];
					this.searching = false;
					return;
				}

				this.userService.search(this.email.value).subscribe(res => {

					this.usersQuery = res;
					this.searching = false;
					console.log(res);
				});
			}, 500);
		}
	}

	addPlayer(index: number): void {

		let player = this.usersQuery[index];
		let newPlayers = [...this.players.value, player];
		this.players.setValue(newPlayers);
	}

	dropPlayer(index: number): void {

		let newPlayers = [...this.players.value];
		newPlayers.splice(index, 1);
		this.players.setValue(newPlayers);
	}

	addNewPlayer(){

		let player = {id: null, email: this.email.value};
		let newPlayers = [...this.players.value, player];
		this.players.setValue(newPlayers);
	}

	save(): void {

		this.teamForm.markAllAsTouched();

		if(this.teamForm.valid){

			if(this.tournament.entry){

				this.paying = true;
				this.stripeService.confirmPayment({
					elements: this.paymentElement.elements,
					confirmParams: {
						payment_method_data: {
							billing_details: {
								name: this.user.email
							}
						}
					},
					redirect: 'if_required'
				}).subscribe(result => {
					this.paying = false;
					console.log('Result', result);
					if (result.error) {

						console.log(result.error.message);
					} else {

						if (result.paymentIntent.status === 'succeeded') {

							this.teamsService.store(this.tournament.id, this.teamForm.value, result.paymentIntent.id).subscribe(res => {

								console.log(res);
								this.dialogRef.close({
									'event': 'register'
								});
							}, res => {

								this.errors = res.error;
							});
						}
					}
				});
			}else{

				this.teamsService.store(this.tournament.id, this.teamForm.value).subscribe(res => {

					console.log(res);
					this.dialogRef.close({
						'event': 'register'
					});
				}, res => {

					this.errors = res.error;
				});
			}
		}

	}
}
