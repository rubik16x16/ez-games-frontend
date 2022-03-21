import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/app/services/users.service';
import { TeamsService } from 'src/app/services/teams.service';
import { Tournament } from 'src/app/models/tournament';

@Component({
	selector: 'app-register-tournament-modal',
	templateUrl: './register-tournament-modal.component.html',
	styleUrls: ['./register-tournament-modal.component.scss']
})
export class RegisterTournamentModalComponent implements OnInit {

	teamForm = this.fb.group({
		name: ['', [
			Validators.required
		]],
		players: [[]]
	});

	searchForm = this.fb.group({
		email: ['']
	});

	usersQuery: User[];
	searching: boolean = false;
	tournament: Tournament = null;

	get name() { return this.teamForm.get('name') }
	get players() { return this.teamForm.get('players') }
	get email() { return this.searchForm.get('email') }

	constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
		public dialogRef: MatDialogRef<RegisterTournamentModalComponent>,
		private fb: FormBuilder,
		private userService: UsersService,
		private teamsService: TeamsService
	) { }

	ngOnInit(): void {

		console.log(this.data);
		this.tournament = this.data.tournament;
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

	save(): void {

		this.teamsService.store(this.tournament.id, this.teamForm.value).subscribe(res => {

			console.log(res);
		});
	}
}
