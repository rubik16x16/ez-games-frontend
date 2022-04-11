import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TournamentsService } from 'src/app/services/tournaments.service';
import { AuthService } from 'src/app/services/auth.service';
import { Tournament } from 'src/app/models/tournament';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FiltersComponent } from './filters/filters.component';
import { RegisterTournamentModalComponent } from '../../components/register-tournament-modal/register-tournament-modal.component';
import { ConfirmComponent } from '../../components/register-tournament-modal/confirm/confirm.component';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'app-tournaments',
	templateUrl: './tournaments.component.html',
	styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

	tournaments: Tournament[] = [];
	user: any;

	constructor(
		private tournamentsService: TournamentsService,
		public dialog: MatDialog,
		private authService: AuthService,
	) { }

	ngOnInit(): void {

		this.tournamentsService.list().subscribe(res => {

			this.tournaments = res;
		});

		this.authService.authUser.subscribe(res => {

			this.user = res;
		});
	}

	openRegisterTournament(tournament: Tournament): Observable<any> {

		return this.dialog.open(RegisterTournamentModalComponent, {
			panelClass: 'register-tournament-modal',
			data: {
				tournament
			}
		}).afterClosed();
	}

	registerTournament(index: number): void {

		let tournament = this.tournaments[index];

		if(this.user){

			this.openRegisterTournament(tournament).subscribe(res => {

				if(res && res.event == 'register'){

					this.dialog.open(ConfirmComponent, {
						panelClass: 'register-tournament-modal'
					})
				}
			});
			return;
		}

		this.authService.startRegister().subscribe(res => {

			console.log(res);
			if(res == 'register' || res == 'login'){

				this.openRegisterTournament(tournament).subscribe();
			}
		});
		return;
	}

	openFilters(): void {

		const dialogRef = this.dialog.open(FiltersComponent, {
			width: '600px'
		});

		dialogRef.afterClosed().subscribe(result => {

		});
	}

	imgTournament(tournament: Tournament): string {

		return `${environment.storage}/${tournament.image}`;
	}
}
