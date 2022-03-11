import { Component, OnInit } from '@angular/core';
require('slick-carousel');
require('jquery');

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {

		let frame = document.querySelector<HTMLElement>('.my-carousel .frame');
		let items = frame.querySelectorAll<HTMLElement>('.item');
		let boxWidth = document.querySelector<HTMLElement>('#my-carousel').offsetWidth;

		let elementsByPage = 4;

		if(boxWidth < 600){

			elementsByPage = 1;
		}

		let itemsWidth = (boxWidth/elementsByPage);
		let frameWidth = items.length * itemsWidth;
		let frameLeft = 0;
		frame.style.setProperty('width', `${frameWidth}px`);

		for(let item of items){

			item.style.setProperty('width', `${itemsWidth}px`);
		}

		let interval = window.setInterval(() => {

			if((frameWidth + frameLeft) <= (elementsByPage * itemsWidth)){

				frameLeft = 0;
				frame.style.setProperty('left', `${frameLeft}px`);
				return;
			}

			frameLeft -= itemsWidth * elementsByPage;
			frame.style.setProperty('left', `${frameLeft}px`);
			return;
		}, 5000);
	}
}
