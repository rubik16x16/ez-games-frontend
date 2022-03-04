import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Team } from 'src/app/models/team';

@Component({
	selector: 'app-create',
	templateUrl: './create.component.html',
	styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

	createForm: FormGroup = new FormGroup({
		name: new FormControl(''),
		start: new FormControl(''),
		end: new FormControl('')
	});

	teams: Team[];

	constructor(
		public dialogRef: MatDialogRef<CreateComponent>,
	) { }

	ngOnInit(): void {
	}

	save(){

		this.dialogRef.close(this.createForm.value);
	}
}
