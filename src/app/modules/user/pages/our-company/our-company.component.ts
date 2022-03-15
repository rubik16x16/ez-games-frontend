import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-company',
  templateUrl: './our-company.component.html',
  styleUrls: ['./our-company.component.scss']
})
export class OurCompanyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  goTo(section: string){

		var element = document.querySelector(`#${section}`);
		element!.scrollIntoView({
			behavior: 'smooth'
		});
	}
}
