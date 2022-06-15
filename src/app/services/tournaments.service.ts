import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Tournament } from 'src/app/models/tournament';
import { map, catchError } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class TournamentsService {

	constructor(
		private http: HttpClient
	) { }

	list(): Observable<Tournament[]>{

		return this.http.get<Tournament[]>(`${environment.api}/tournaments`).pipe(
			map((data: any[]) => {

				return data.map(item => {

					return new Tournament(item);
				});
			})
		);
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

	getMatchesData(id: number): Observable<any>{

		return this.http.get<any>(`${environment.api}/tournaments/${id}/get-data`);
	}
}
