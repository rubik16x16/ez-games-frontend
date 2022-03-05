import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Tournament } from 'src/app/models/tournament';

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
  	public dialogRef: MatDialogRef<EditComponent>,
  	@Inject(MAT_DIALOG_DATA) public tournament: Tournament,
  ) { }

  ngOnInit(): void {

  	console.log(this.tournament);
  	this.editForm.patchValue(this.tournament);
  }

  save(){

		this.dialogRef.close(this.editForm.value);
	}
}
