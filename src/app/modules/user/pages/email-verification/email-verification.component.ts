import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-email-verification',
	templateUrl: './email-verification.component.html',
	styleUrls: ['./email-verification.component.scss']
})
export class EmailVerificationComponent implements OnInit {

	constructor(
		private route: ActivatedRoute,
		private router: Router,
		private authService: AuthService
	) { }

	ngOnInit(): void {

		let token = this.route.snapshot.paramMap.get('token');
		this.authService.verifyEmail(token).subscribe(res => {

			const localStorage = window.localStorage;
			localStorage.setItem('user', JSON.stringify(res.user));
			window.location.href = '/';
		});
		console.log(token);
	}
}
