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
		private http: HttpClient
	) { }

	list(): Observable<Tournament[]>{

		return this.http.get<Tournament[]>(`${environment.api}/tournaments`);
	}

	store(tournament: Tournament): Observable<Tournament>{

		return this.http.post<Tournament>(`${environment.api}/tournaments`, tournament);
	}

	update(tournament: Tournament): Observable<Tournament>{

		return this.http.put<Tournament>(`${environment.api}/tournaments/${tournament.id}`, tournament);
	}

	delete(tournament: Tournament): Observable<any>{

		return this.http.delete<any>(`${environment.api}/tournaments/${tournament.id}`);
	}
}
