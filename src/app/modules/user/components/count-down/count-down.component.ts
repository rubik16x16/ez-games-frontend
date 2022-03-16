import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs/internal/observable/interval';
import { map } from 'rxjs/internal/operators/map';
import { Observable } from 'rxjs';

interface Time {

	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

@Component({
	selector: 'app-count-down',
	templateUrl: './count-down.component.html',
	styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {

	time: Time = {
		days: 0,
		hours: 0,
		minutes: 0,
		seconds: 0
	};

	@Input() panelClass: string | string[];
	@Input() date: string;

	constructor() { }

	ngOnInit(): void {

		this.start().subscribe(_ => {});
	}

	updateTime(): void {

		const now = new Date();
		const finishDate = new Date(this.date);
		const diff = finishDate.getTime() - now.getTime();

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

	getPrettyTime(): any {

		let prettyTime = {...this.time};

		for(let item in prettyTime){

			prettyTime[item] = prettyTime[item].toLocaleString('en-US', {
		    minimumIntegerDigits: 2,
		    useGrouping: false
		  });
		}

		return prettyTime;
	}
}
