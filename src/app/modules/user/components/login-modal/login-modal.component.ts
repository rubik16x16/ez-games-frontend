import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})

export class LoginModalComponent implements OnInit {

	loginForm: FormGroup = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	});

  constructor(
		public dialogRef: MatDialogRef<LoginModalComponent>,
	) { }

  ngOnInit(): void {

  }

	login(): void {

		console.log(this.loginForm.value);
		this.dialogRef.close({
			event: 'login',
			user: this.loginForm.value
		});
	}
}
