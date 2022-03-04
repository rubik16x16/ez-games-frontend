import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template1',
  templateUrl: './template1.component.html',
  styleUrls: ['./template1.component.scss']
})
export class Template1Component implements OnInit {

	opened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
