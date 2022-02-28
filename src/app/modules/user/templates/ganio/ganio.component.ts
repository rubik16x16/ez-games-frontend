import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LoginModalComponent } from '../../components/login-modal/login-modal.component';
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
		public dialog: MatDialog
	) { }

  ngOnInit(): void {

		const localStorage = window.localStorage;
		const user = localStorage.getItem('user');

		if(user){

			this.user = JSON.parse(user);
		}

		console.log(this.user);
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
