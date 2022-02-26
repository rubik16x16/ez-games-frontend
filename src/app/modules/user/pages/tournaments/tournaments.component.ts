import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

	tournaments: any[] = [
		{
			name: 'tournament1'
		}
	];

  constructor() { }

  ngOnInit(): void {
  }

}
