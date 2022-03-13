import { Component, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
require('slick-carousel');
require('jquery');

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

	@ViewChild('slider') slider: ElementRef;

	constructor() { }

	ngOnInit(): void {

	}

	ngAfterViewInit(): void {

		let slider = this.slider.nativeElement;
		let slides = slider.querySelector('.slides');

		let interval = window.setInterval(() => {

			if(slides.scrollLeft > (slides.scrollLeftMax - slider.offsetWidth)){

				slides.scrollLeft = 0;
				return
			}

			slides.scrollLeft += slider.offsetWidth;
		}, 5000);
	}

	scrollLeft(){

		let slider = this.slider.nativeElement;
		let slides = slider.querySelector('.slides');

		console.log(slides.scrollLeft);
		slides.scrollLeft += slider.offsetWidth;
		console.log(slides.scrollLeft);
	}
}
