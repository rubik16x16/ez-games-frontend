import { Component, OnInit, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
require('bootstrap');

@Component({
	selector: 'app-ganio',
	templateUrl: './ganio.component.html',
	styleUrls: ['./ganio.component.scss'],
	encapsulation: ViewEncapsulation.None
})
export class GanioComponent implements OnInit {

	user: any = null;

	constructor(
		public dialog: MatDialog,
		private authService: AuthService
	) { }

	ngOnInit(): void {

		this.authService.authUser.subscribe(res => {

			this.user = res;
		});

		const localStorage = window.localStorage;
		const user = localStorage.getItem('user');

		if(user){

			this.authService.setAuthUser(JSON.parse(user));
		}

		// if(this.user){

		// 	if(!this.user.email_verified_at){

		// 		this.openEmailVerification();
		// 	}
		// }

		let navbarElements = document.querySelectorAll<HTMLElement>('.navbar li a');
		let navbarBtn = document.querySelector<HTMLElement>('.navbar-toggler');

		for(let navbarElement of navbarElements){

			navbarElement.addEventListener('click', e => {

				e.preventDefault();

				let element = navbarElement.parentElement;

				if(element.classList.contains('show')){

					element.classList.remove('show');
				}else{


					let submenu = element.querySelector<HTMLElement>('.sub-menu');

					if(submenu){

						console.log(submenu);
						let parent = element.parentElement;
						let siblings = [...parent.children].filter(c => c != element);

						element.classList.add('show');

						for(let sibling of siblings){

							sibling.classList.remove('show');
						}
					}else{

						navbarBtn.click();
					}

				}
			});
		}
	}

	openLogin(): void {

		this.authService.openLoginModal().subscribe(res => {
		});
	}

	openRegister(): void {

		this.authService.startRegister().subscribe(res => {

		});
	}

	logout(): void{

		const localStorage = window.localStorage;
		localStorage.removeItem('user');
		localStorage.removeItem('auth_token');
		this.authService.setAuthUser(null);
	}

	goTo(section: string){

		var element = document.querySelector(`#${section}`);
		element!.scrollIntoView({
			behavior: 'smooth'
		});
	}
}
