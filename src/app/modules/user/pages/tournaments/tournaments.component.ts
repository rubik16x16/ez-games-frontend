import { Component, OnInit } from '@angular/core';
import { Tournament } from 'src/app/models/tournament';
import { TournamentsService } from 'src/app/services/tournaments.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ShowComponent } from './show/show.component';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent implements OnInit {

	tournaments: Tournament[] = [];

  constructor(
  	private tournamentsService: TournamentsService,
  	public dialog: MatDialog
  ) { }

  ngOnInit(): void {

  	this.tournamentsService.list().subscribe(res => {

  		this.tournaments = res;
  	});
  }

  showTournament(index): void {

  	let tournament = this.tournaments[index];

  	console.log('test');

  	const dialogRef = this.dialog.open(ShowComponent, {
      width: '450px',
      data: {
      	tournament
      }
    });

		dialogRef.afterClosed().subscribe(result => {

    });
  }
}
