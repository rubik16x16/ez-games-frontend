import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Tournament } from 'src/app/models/tournament';
import { TournamentsService } from 'src/app/services/tournaments.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

	editForm: FormGroup = new FormGroup({
		name: new FormControl(''),
		start: new FormControl(''),
		end: new FormControl('')
	});

  constructor(
  	@Inject(MAT_DIALOG_DATA) public tournament: Tournament,
  	public dialogRef: MatDialogRef<EditComponent>,
  	private tournamentsService: TournamentsService
  ) { }

  ngOnInit(): void {

  	this.editForm.patchValue(this.tournament);
  }

  save(){

  	let newTournament = Object.assign(this.tournament, this.editForm.value);
  	this.tournamentsService.update(newTournament).subscribe(res => {

  		this.dialogRef.close(res);
  	});
	}
}
