import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

	registerForm: FormGroup = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	});

  constructor(
  	public dialogRef: MatDialogRef<RegisterModalComponent>
  ) { }

  ngOnInit(): void {

  }

  register(): void {

  	this.dialogRef.close({
			event: 'register',
			user: this.registerForm.value
		});
  }
}
