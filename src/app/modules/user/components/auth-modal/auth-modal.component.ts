import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss']
})
export class AuthModalComponent implements OnInit {

	currentView: string = 'login';

  constructor(
  	@Inject(MAT_DIALOG_DATA) public data: any,
  	public dialogRef: MatDialogRef<AuthModalComponent>
  ) { }

  ngOnInit(): void {

  	if(this.data.view){

  		this.currentView = this.data.view;
  	}
  }

  logedIn(value): void{

  	this.dialogRef.close({
  		event: 'login'
  	});
  }

  registered(value): void{

  	this.dialogRef.close({
  		event: 'register'
  	});
  }

  toggleView(view): void{

  	this.currentView = view;

  	// if(this.currentView == 'login'){

  	// 	this.currentView = 'register';
  	// 	return;
  	// }

  	// this.currentView = 'login';
  	// return;
  }
}
