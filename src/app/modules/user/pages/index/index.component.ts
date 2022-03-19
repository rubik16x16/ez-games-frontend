import { Component, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ComingSoonModalComponent } from '../../components/coming-soon-modal/coming-soon-modal.component';
import { RegisterTournamentModalComponent } from '../../components/register-tournament-modal/register-tournament-modal.component';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

	@ViewChild('slider') slider: ElementRef;

	constructor(
		public dialog: MatDialog,
	) { }

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

	openComingSoon(): void {

		const dialogRef = this.dialog.open(RegisterTournamentModalComponent, {
			panelClass: 'coming-soon-modal'
		});

		dialogRef.afterClosed().subscribe(result => {

		});
	}
}
