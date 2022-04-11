import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss']
})
export class RegisterModalComponent implements OnInit {

	registerForm = this.fb.group({
		email: ['', [
			Validators.minLength(4),
			Validators.required,
			Validators.email
		]],
		password: ['', [
			Validators.minLength(4),
			Validators.required
		]],
		nickname: ['', [
			Validators.minLength(4),
			Validators.required
		]],
		// captchaResponse: ['', [
		// 	Validators.required
		// ]]
	});

	readonly RECAPTCHA_SITE_KEY = environment.recaptcha_site_key;

	errors: any;

	@Output() registered = new EventEmitter<any>();
	@Output() toggleView = new EventEmitter<any>();

  constructor(
  	public dialogRef: MatDialogRef<RegisterModalComponent>,
  	private fb: FormBuilder,
  	private authService: AuthService

  ) { }

  ngOnInit(): void {

  }

  get email() { return this.registerForm.get('email') }
  get password() { return this.registerForm.get('password') }
  get captchaResponse() { return this.registerForm.get('captchaResponse') }
  get nickname() { return this.registerForm.get('nickname') }

  register(): void {

  	this.registerForm.markAllAsTouched();

  	if(this.registerForm.valid){

  		this.authService.register(this.registerForm.value).subscribe(res => {

  			const localStorage = window.localStorage;
				localStorage.setItem('auth_token', res.access_token);
				localStorage.setItem('expires_at', res.access_token);
				localStorage.setItem('user', JSON.stringify(res.user));

				this.registered.emit();

				this.authService.setAuthUser(res.user);

			}, res => {

				this.errors = res.error;
			});
  	}
  }

  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response: ${captchaResponse}`);
    this.registerForm.patchValue({'captchaResponse':captchaResponse});
  }

  login(): void {

  	this.toggleView.emit('login');
  }
}
