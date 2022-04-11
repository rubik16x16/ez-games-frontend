import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forgot-password-modal',
  templateUrl: './forgot-password-modal.component.html',
  styleUrls: ['./forgot-password-modal.component.scss']
})
export class ForgotPasswordModalComponent implements OnInit {

	errors: any;
	forgotPassForm = this.fb.group({
		email: ['', [
			Validators.required,
			Validators.email,
			Validators.maxLength(250)
		]]
	});

	get email() { return this.forgotPassForm.get('email') }

  constructor(
  	private fb: FormBuilder,
  ) { }

  ngOnInit(): void {
  }

}
