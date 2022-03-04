import { Component, OnInit } from '@angular/core';

const DATA_SOURCE: any[] = [
	{
		id: 1,
		name: 'test1',
		teams: 'teams test',
		start: 'start',
		end: 'end'
	},
	{
		id: 2,
		name: 'test2',
		teams: 'teams test',
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

	constructor() { }

	ngOnInit(): void {

	}

	delTournament(index){

		this.dataSource.splice(index, 1);
	}
}
