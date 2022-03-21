import { Component, OnInit, AfterViewInit, ElementRef, ViewChild  } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
import { TournamentsService } from 'src/app/services/tournaments.service';
import { Tournament } from 'src/app/models/tournament';
import { ComingSoonModalComponent } from '../../components/coming-soon-modal/coming-soon-modal.component';
import { RegisterTournamentModalComponent } from '../../components/register-tournament-modal/register-tournament-modal.component';

@Component({
	selector: 'app-index',
	templateUrl: './index.component.html',
	styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, AfterViewInit {

	@ViewChild('slider') slider: ElementRef;

	tournaments: Tournament[] = [];
	user: any;

	constructor(
		public dialog: MatDialog,
		private authService: AuthService,
		private tournamentsService: TournamentsService
	) { }

	ngOnInit(): void {

		this.tournamentsService.list().subscribe(res => {

			this.tournaments = res;
			console.log(res);
		});

		this.authService.authUser.subscribe(res => {

			this.user = res;
		});

		console.log(this.user);
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

	openRegisterTournament(tournament: Tournament): Observable<any> {

		return this.dialog.open(RegisterTournamentModalComponent, {
			panelClass: 'register-tournament-modal',
			data: {
				tournament
			}
		}).afterClosed();
	}

	registerTournament(index: number): void {

		let tournament = this.tournaments[index];

		if(this.user){

			this.openRegisterTournament(tournament).subscribe();
			return;
		}

		this.authService.startRegister().subscribe(res => {

			if(res == 'register'){

				this.openRegisterTournament(tournament).subscribe();
			}
		});
		return;
	}
}
