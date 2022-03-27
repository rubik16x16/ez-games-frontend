import { Component, OnInit } from '@angular/core';
import { TournamentsService } from 'src/app/services/tournaments.service';

@Component({
  selector: 'app-tournament-results',
  templateUrl: './tournament-results.component.html',
  styleUrls: ['./tournament-results.component.scss']
})
export class TournamentResultsComponent implements OnInit {

	teams: any[] = []

  constructor(
  	private tournamentsService: TournamentsService
  ) { }

  ngOnInit(): void {

  	this.tournamentsService.getMatchesData().subscribe(res => {

  		this.teams = res;
  		console.log(res);
  	});
  }
}
