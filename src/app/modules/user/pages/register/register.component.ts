import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

	registerForm = new FormGroup({
		email: new FormControl(''),
		username: new FormControl(''),
		password: new FormControl('')
	});

  constructor() { }

  ngOnInit(): void {
  }

	register(){

		console.log(this.registerForm.value);
	}
}
