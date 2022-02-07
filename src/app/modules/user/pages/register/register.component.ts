import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	registerForm = new FormGroup({
		email: new FormControl(''),
		nickname: new FormControl(''),
		password: new FormControl('')
	});

	userStats: any = {
		"avatarUrl": "https://material.angular.io/assets/img/examples/shiba2.jpg",
    "kills": null,
    "deaths": null,
    "kdRatio": null,
    "winRatio": null
	}

  constructor(
		private authService: AuthService
	) { }

  ngOnInit(): void {
  }

	register(){

		console.log(this.registerForm.value);
	}

	checkNickname(){

		this.authService.checkNickname(this.registerForm.value.nickname).subscribe(stats => {

			this.userStats = stats;
		});
	}
}
