import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class TeamsService {

	constructor(
		private http: HttpClient
	) { }

	store(tournamentId: number, teamData: any, paymentId: string = ''): Observable<any>{

		return this.http.post<any>(`${environment.api}/tournaments/${tournamentId}/teams`, {
			...teamData,
			paymentId
		});
	}
}
