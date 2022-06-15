import { Component, OnInit } from '@angular/core';
import { MyTournamentsService } from 'src/app/services/my-tournaments.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

	myTournament: any;

  constructor(
  	private route: ActivatedRoute,
  	private myTournamentsService: MyTournamentsService
  ) { }

  ngOnInit(): void {

  	let id = this.route.snapshot.paramMap.get('id');
  	this.myTournamentsService.show(parseInt(id)).subscribe(res => {

  		this.myTournament = res;
  	});
  }

  confirm(): void {

  	this.myTournamentsService.confirm(this.myTournament.id).subscribe(res => {

  		this.myTournament.confirmed = true;
  	})
  }

  dropPlayer(index): void {

  	let player = this.myTournament.players[index];

  	this.myTournament.players.splice(index, 1);

  	this.myTournamentsService.dropPlayer({...player, unregistered: true}, this.myTournament).subscribe(res => {

  	});
  }
}
