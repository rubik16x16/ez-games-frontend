import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Injectable({
	providedIn: 'root'
})
export class UsersService {

	constructor(
		private http: HttpClient
	) { }

	search(email: string): Observable<User[]> {

		return this.http.get<User[]>(`${environment.api}/users/search`, {
			params: {
				email
			}
		});
	}
}
