import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
		private http: HttpClient
	) { }

	login(email: string, password: string): Observable<any>{

		return this.http.post<any>(`${environment.api}/login`, {
			email,
			password
		});
	}

	getData(): Observable<any>{

		return this.http.get<any>(`${environment.api}/user`);
	}

	register(user: any): Observable<any>{

		return this.http.post(`${environment.api}/register`, user);
	}

	verifyEmail(token: string): Observable<any>{

		return this.http.get(`${environment.api}/verify-email/${token}`);
	}
}
