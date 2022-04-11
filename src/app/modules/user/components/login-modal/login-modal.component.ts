import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})

export class LoginModalComponent implements OnInit {

	loginForm = this.fb.group({
		email: ['', [
			Validators.required,
			Validators.email
		]],
		password: ['', [
			Validators.required
		]]
	});

	errors: any;

	@Output() logedIn = new EventEmitter<any>();
	@Output() toggleView = new EventEmitter<any>();

  constructor(
		private fb: FormBuilder,
  	private authService: AuthService
	) { }

  ngOnInit(): void {

  }

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }

	login(){

		this.loginForm.markAllAsTouched();
		let loginData = this.loginForm.value;
		let localStorage = window.localStorage;

		if(this.loginForm.valid){

			this.authService.login(loginData.email, loginData.password).subscribe(res => {

				localStorage.setItem('auth_token', res.access_token);
				localStorage.setItem('expires_at', res.access_token);
				localStorage.setItem('user', JSON.stringify(res.user));

				this.logedIn.emit();

				this.authService.setAuthUser(res.user);
			}, res => {

				this.errors = res.error;
			});
		}
	}

	register(): void {

		this.toggleView.emit('register');
	}

	forgotPassword(): void {

		this.toggleView.emit('forgot-password');
	}
}
