import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Tournament } from 'src/app/models/tournament';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

	tournament: Tournament = null;

  constructor(
  	@Inject(MAT_DIALOG_DATA) public data: any,
  	public dialogRef: MatDialogRef<ShowComponent>,
  ) { }

  ngOnInit(): void {

  	this.tournament = this.data.tournament;
  }

  test(): void {

  	console.log('test');
  }
}
