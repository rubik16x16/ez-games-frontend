import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	loginForm = new FormGroup({
		email: new FormControl(''),
		password: new FormControl('')
	});

  constructor(
  	private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

	login(){

		let loginData = this.loginForm.value;
		let localStorage = window.localStorage;
		this.authService.login(loginData.email, loginData.password).subscribe(res => {

			localStorage.setItem('auth_token', res.access_token);
			localStorage.setItem('expires_at', res.access_token);
			localStorage.setItem('user', JSON.stringify(res.user));
		});
	}

	getData(){

		this.authService.getData().subscribe(res => {

			console.log(res);
		});
	}
}
