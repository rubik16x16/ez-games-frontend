import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';

const DATA_SOURCE: any[] = [
	{
		id: 1,
		name: 'test1',
		teams: [
			{
				name: 'team1',
				members: []
			},
			{
				name: 'team2',
				members: []
			}
		],
		start: 'start',
		end: 'end'
	},
	{
		id: 2,
		name: 'test2',
		teams: [],
		start: 'start',
		end: 'end'
	}
]

@Component({
	selector: 'app-tournaments',
	templateUrl: './tournaments.component.html',
	styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

	displayedColumns: string[] = [
		'id', 'name', 'teams', 'start', 'end'
	];

	dataSource: any[] = DATA_SOURCE;

	constructor(
		public dialog: MatDialog
	) { }

	ngOnInit(): void {

		let test = this.dataSource[0].teams.map(team => team.name).join(', ');
		console.log(test);
	}

	delTournament(index){

		this.dataSource.splice(index, 1);
	}

	createTournament(){

		const dialogRef = this.dialog.open(CreateComponent, {
      width: '450px'
    });

		dialogRef.afterClosed().subscribe(result => {

			if(result){

				this.dataSource.push(result);
				console.log(result);
			}
    });
	}

	editTournament(index){

		const dialogRef = this.dialog.open(EditComponent, {
      width: '450px',
      data: this.dataSource[index]
    });

		dialogRef.afterClosed().subscribe(result => {
			if(result){

				this.dataSource.splice(index, 1, result);
				console.log(result);
			}
    });
	}

	getTournamentTeams(tournament){

		return tournament.teams.map(team => team.name).join(', ');
	}
}
