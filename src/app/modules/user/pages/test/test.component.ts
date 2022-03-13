import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-test',
	templateUrl: './test.component.html',
	styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit, AfterViewInit {

	@ViewChild('slider') slider: ElementRef;

	constructor() { }

	ngOnInit(): void {

	}

	ngAfterViewInit(): void {

		let slider = this.slider.nativeElement;
		let slides = slider.querySelector('.slides');

		console.log('test');
		let interval = window.setInterval(() => {

			console.log((slides.scrollLeftMax - slider.offsetWidth), slides.scrollLeft);
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
