import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/models/tournament';
import { MyTournamentsService } from 'src/app/services/my-tournaments.service';

@Component({
  selector: 'app-my-tournaments',
  templateUrl: './my-tournaments.component.html',
  styleUrls: ['./my-tournaments.component.scss']
})
export class MyTournamentsComponent implements OnInit {

	myTournaments: any[] = [
		{
			id: 1,
			name: 'test'
		},
		{
			id: 1,
			name: 'test'
		}
	];

  constructor(
  	private myTournamentsService: MyTournamentsService
  ) { }

  ngOnInit(): void {

  	this.myTournamentsService.list().subscribe(res => {

  		console.log(res);
  		this.myTournaments = res;
  	});
  }

}
