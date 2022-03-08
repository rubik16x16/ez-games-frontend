import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';
import { CodUser } from '../models/cod-user';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
  	private http: HttpClient
  ) { }

  getProfile(): Observable<User>{

  	return this.http.get<User>(`${environment.api}/profile`);
  }

  getCodUser(nickname: string): Observable<CodUser>{

		return this.http.get<CodUser>(`${environment.api}/profile/cod-user?nickname=${nickname.replace('#', '%23')}`);
	}

	updateNickname(nickname: string): Observable<any>{

		return this.http.put<CodUser>(`${environment.api}/profile/nickname`, {
			nickname
		});
	}
}
