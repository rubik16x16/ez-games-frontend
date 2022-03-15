import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {

  constructor(
  	public dialogRef: MatDialogRef<FiltersComponent>
  ) { }

  ngOnInit(): void {
  }

}
