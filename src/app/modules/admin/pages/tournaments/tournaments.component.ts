import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { TournamentsService } from 'src/app/services/tournaments.service';
import { Tournament } from 'src/app/models/tournament';

@Component({
	selector: 'app-tournaments',
	templateUrl: './tournaments.component.html',
	styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

	displayedColumns: string[] = [
		'id', 'name', 'teams', 'start', 'end'
	];

	tournaments: Tournament[] = [];

	constructor(
		public dialog: MatDialog,
		private tournamentsService: TournamentsService
	) { }

	ngOnInit(): void {

		this.tournamentsService.list().subscribe(res => {

			this.tournaments = res;
		});
	}

	delTournament(index){

		let tournament = this.tournaments[index];
		let res = this.tournamentsService.delete(tournament).subscribe();
		this.tournaments.splice(index, 1);
	}

	createTournament(){

		const dialogRef = this.dialog.open(CreateComponent, {
      width: '450px'
    });

		dialogRef.afterClosed().subscribe(result => {

			if(result){

				this.tournaments.push(result);
				console.log(result);
			}
    });
	}

	editTournament(index){

		const dialogRef = this.dialog.open(EditComponent, {
      width: '450px',
      data: this.tournaments[index]
    });

		dialogRef.afterClosed().subscribe(result => {
			if(result){

				this.tournaments.splice(index, 1, result);
				console.log(result);
			}
    });
	}

	getTournamentTeams(tournament){

		return tournament.teams.map(team => team.name).join(', ');
	}
}
