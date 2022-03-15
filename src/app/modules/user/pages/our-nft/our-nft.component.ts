import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';
import { ethers } from "ethers";
declare var window: any;

@Component({
  selector: 'app-our-nft',
  templateUrl: './our-nft.component.html',
  styleUrls: ['./our-nft.component.scss']
})
export class OurNftComponent implements OnInit, AfterViewInit {

	time!: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };

  finishDate: Date = new Date();
  finishDateString: string = '2022-03-31T19:00:00-05:00';

	@ViewChild('slider') slider: ElementRef;

	constructor() { }

	ngOnInit(): void {

		this.time = {
      days: 0, hours: 0, minutes: 0, seconds: 0
    };

    this.finishDate = new Date(this.finishDateString);
    console.log(this.finishDate.toLocaleString("en-US", {timeZone: "America/New_York"}));
    this.start().subscribe(_ => {});
	}

	ngAfterViewInit(): void { }

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

  updateTime(): void {

    const now = new Date();
    const diff = this.finishDate.getTime() - now.getTime();

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const mins = Math.floor(diff / (1000 * 60));
    const secs = Math.floor(diff / 1000);

    this.time.days = days;
    this.time.hours = hours - days * 24;
    this.time.minutes = mins - hours * 60;
    this.time.seconds = secs - mins * 60;
  }

  start(): Observable<number> {
    return interval(1000).pipe(
      map((x: number) => {
        this.updateTime();
        return x;
      })
    );
  }

  async connectWallet(): Promise<any>{

  	const provider = new ethers.providers.Web3Provider(window.ethereum);

		await provider.send("eth_requestAccounts", []);

		const signer = provider.getSigner();
		const address = await signer.getAddress();

		const balance = await provider.getBalance(address);
		console.log(ethers.utils.formatEther(balance));
  }

  goTo(section: string){

		var element = document.querySelector(`#${section}`);
		element!.scrollIntoView({
			behavior: 'smooth'
		});
	}
}
