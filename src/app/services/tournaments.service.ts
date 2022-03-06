import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tournament } from 'src/app/models/tournament';

@Injectable({
	providedIn: 'root'
})
export class TournamentsService {

	constructor(
		private httpClient: HttpClient
	) { }

	list(): Observable<Tournament[]>{

		return this.httpClient.get<Tournament[]>(`${environment.api}/tournaments`);
	}

	store(tournament: Tournament): Observable<Tournament>{

		return this.httpClient.post<Tournament>(`${environment.api}/tournaments`, tournament);
	}

	update(tournament: Tournament): Observable<Tournament>{

		return this.httpClient.put<Tournament>(`${environment.api}/tournaments/${tournament.id}`, tournament);
	}

	delete(tournament: Tournament): Observable<any>{

		return this.httpClient.delete<any>(`${environment.api}/tournaments/${tournament.id}`);
	}
}
