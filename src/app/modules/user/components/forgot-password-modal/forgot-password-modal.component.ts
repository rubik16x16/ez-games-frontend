import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

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

	message: string = null;

	get email() { return this.forgotPassForm.get('email') }

  constructor(
  	private fb: FormBuilder,
  	private resetPasswordService: ResetPasswordService
  ) { }

  ngOnInit(): void {
  }

  submit(): void {

  	this.forgotPassForm.markAllAsTouched();

  	if(this.forgotPassForm.valid){

  		this.resetPasswordService.sendEmail(this.email.value).subscribe(res => {

  			if(res == 'passwords.user'){

  				this.errors = {
  					'Email': ['this email does not exist']
  				};
  			}else{

  				this.message = 'An email has been sent to you';
  			}
  		});
  	}
  }
}
