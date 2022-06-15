import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
	providedIn: 'root'
})
export class MyTournamentsService {

	constructor(
		private http: HttpClient
	) { }

	list(): Observable<any> {

		return this.http.get(`${environment.api}/my-tournaments`);
	}

	show(id: number): Observable<any> {

		return this.http.get(`${environment.api}/my-tournaments/${id}`);
	}

	confirm(id: number): Observable<any> {

		return this.http.post(`${environment.api}/my-tournaments/${id}/confirm`, {});
	}

	dropPlayer(player: any, tournament: any): Observable<any> {

		return this.http.delete(`${environment.api}/my-tournaments/${tournament.id}/drop-player/${player.id}`, player);
	}
}
