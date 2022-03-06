import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { Team } from 'src/app/models/team';
import { TournamentsService } from 'src/app/services/tournaments.service';

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

	teams: Team[] = [];

	constructor(
		public dialogRef: MatDialogRef<CreateComponent>,
		private tournamentsService: TournamentsService
	) { }

	ngOnInit(): void {
	}

	save(){

		this.tournamentsService.store(this.createForm.value).subscribe(res => {

			this.dialogRef.close({
				...res,
				teams: this.teams
			});
		});

	}
}
