import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResetPasswordService {

  constructor(
  	private http: HttpClient
  ) { }

  sendEmail(email: string): Observable<any> {

  	return this.http.get(`${environment.api}/reset-password`, {
  		params: {
  			email
  		}
  	});
  }

  resetPassword(password: string, token: string, email: string): Observable<any> {

  	return this.http.post(`${environment.api}/reset-password`, {
  		password,
  		token,
  		email
  	});
  }
}
