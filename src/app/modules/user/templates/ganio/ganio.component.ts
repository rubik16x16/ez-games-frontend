import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginModalComponent } from '../../components/login-modal/login-modal.component';
import { RegisterModalComponent } from '../../components/register-modal/register-modal.component';
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

		const localStorage = window.localStorage;
		const user = localStorage.getItem('user');

		if(user){

			this.user = JSON.parse(user);
		}

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

	openDialog(): void {
		const dialogRef = this.dialog.open(LoginModalComponent, {
			width: '450px'
		});

		dialogRef.afterClosed().subscribe(result => {

			if(result && result.event == 'login'){

				const localStorage = window.localStorage;
				localStorage.setItem('user', JSON.stringify(result.user));
				this.user = result.user;
			}
		});
	}

	openRegister(): void {

		const dialogRef = this.dialog.open(RegisterModalComponent, {
      panelClass: 'register-modal'
    });

		dialogRef.afterClosed().subscribe(result => {
			if(result && result.event == 'register'){

				this.authService.register(result.user).subscribe(res => {

					console.log(res);
					localStorage.setItem('auth_token', res.access_token);
					localStorage.setItem('expires_at', res.access_token);
					localStorage.setItem('user', JSON.stringify(res.user));
				});
			}

    });
	}

	logout(): void{

		const localStorage = window.localStorage;
		localStorage.removeItem('user');
		this.user = null;
	}

	goTo(section: string){

		var element = document.querySelector(`#${section}`);
		element!.scrollIntoView({
			behavior: 'smooth'
		});
	}
}
