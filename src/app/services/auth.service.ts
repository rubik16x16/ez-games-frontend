import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user-info';
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

	checkNickname(nickname: string): Observable<UserInfo>{

		return this.http.get<UserInfo>(`${environment.api}/check-nickname?nickname=${nickname.replace('#', '%23')}`);
	}

	login(email: string, password: string): Observable<any>{

		return this.http.post<any>(`${environment.api}/login`, {
			email,
			password
		});
	}

	getData(): Observable<any>{

		return this.http.get<any>(`${environment.api}/user`);
	}
}
