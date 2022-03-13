import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-our-nft',
  templateUrl: './our-nft.component.html',
  styleUrls: ['./our-nft.component.scss']
})
export class OurNftComponent implements OnInit, AfterViewInit {

	@ViewChild('slider') slider: ElementRef;

	constructor() { }

	ngOnInit(): void {

	}

	ngAfterViewInit(): void {

	}

	scrollNext(){

		let slider = this.slider.nativeElement;
		let slides = slider.querySelector('.slides');

		if(slides.scrollLeft > (slides.scrollLeftMax - slider.offsetWidth)){

			slides.scrollLeft = 0;
			return;
		}

		slides.scrollLeft += slider.offsetWidth;
		return;
	}

	scrollPrev() : void{

		let slider = this.slider.nativeElement;
		let slides = slider.querySelector('.slides');

		if(slides.scrollLeft == 0){

			slides.scrollLeft = slides.scrollLeftMax;
			return;
		}

		slides.scrollLeft -= slider.offsetWidth;
		return;
	}
}
