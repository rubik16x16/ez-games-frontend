import { Component, OnInit } from '@angular/core';
import { TournamentsService } from 'src/app/services/tournaments.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-tournament-results',
	templateUrl: './tournament-results.component.html',
	styleUrls: ['./tournament-results.component.scss']
})
export class TournamentResultsComponent implements OnInit {

	teams: any[] = []

	constructor(
		private tournamentsService: TournamentsService,
		private route: ActivatedRoute,
		private router: Router,
	) { }

	ngOnInit(): void {

		let id = this.route.snapshot.paramMap.get('id');

		this.tournamentsService.getMatchesData(parseInt(id)).subscribe(res => {

			this.teams = res;
			console.log(res);
		});

		setInterval(() => {

			this.tournamentsService.getMatchesData(parseInt(id)).subscribe(res => {

				this.teams = res;
				console.log(res);
			});
		}, 5000);
	}
}
