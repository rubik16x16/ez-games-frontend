import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FiltersComponent } from './filters/filters.component';
import { ComingSoonModalComponent } from '../../components/coming-soon-modal/coming-soon-modal.component';

@Component({
	selector: 'app-mock-tournaments',
	templateUrl: './mock-tournaments.component.html',
	styleUrls: ['./mock-tournaments.component.scss']
})
export class MockTournamentsComponent implements OnInit {

	constructor(
		public dialog: MatDialog
	) { }

	ngOnInit(): void {
	}

	openFilters(): void {

		const dialogRef = this.dialog.open(FiltersComponent, {
			width: '600px'
		});

		dialogRef.afterClosed().subscribe(result => {

		});
	}

	openComingSoon(): void {

		const dialogRef = this.dialog.open(ComingSoonModalComponent, {
			panelClass: 'coming-soon-modal'
		});

		dialogRef.afterClosed().subscribe(result => {

		});
	}
}
