import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmedComponent } from './confirmed/confirmed.component';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { ResetPasswordService } from 'src/app/services/reset-password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

	errors: any;
	resetPasswordForm = this.fb.group({
		email: ['', [
			Validators.email,
			Validators.maxLength(250)
		]],
		newPassword: ['', [
			Validators.required,
			Validators.maxLength(250),
			Validators.minLength(6)
		]],
		repeatNewPassword: ['', [
			Validators.required,
			Validators.maxLength(250),
			Validators.minLength(6)
		]]
	})

	get email(){ return this.resetPasswordForm.get('email') }
	get newPassword(){ return this.resetPasswordForm.get('newPassword') }
	get repeatNewPassword(){ return this.resetPasswordForm.get('repeatNewPassword') }

  constructor(
  	private fb: FormBuilder,
  	public dialog: MatDialog,
  	private route: ActivatedRoute,
		private router: Router,
		private resetPasswordService: ResetPasswordService
  ) { }

  ngOnInit(): void {

  }

  submit(): void {

  	let token = this.route.snapshot.paramMap.get('token');

  	this.resetPasswordService.resetPassword(this.newPassword.value, token, this.email.value).subscribe(res => {

  		this.openConfirmModal().subscribe(res => {

	  		// console.log(res);
	  	});
  	})
  }

  openConfirmModal(): Observable<any> {

  	return this.dialog.open(ConfirmedComponent, {
			panelClass: 'register-tournament-modal',
			data: {
			}
		}).afterClosed();
  }
}
