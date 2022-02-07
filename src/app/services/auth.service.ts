import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInfo } from '../models/user-info';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
		private http: HttpClient
	) { }

	checkNickname(nickname: string): Observable<UserInfo>{

		return this.http.get<UserInfo>(`${environment.api}/api/check-nickname?nickname=${nickname.replace('#', '%23')}`);
	}
}
