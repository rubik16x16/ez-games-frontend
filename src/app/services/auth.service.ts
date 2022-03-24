import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';
import { BehaviorSubject } from 'rxjs';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { LoginModalComponent } from 'src/app/modules/user/components/login-modal/login-modal.component'
import { RegisterModalComponent } from 'src/app/modules/user/components/register-modal/register-modal.component';
import { EmailVerificationModalComponent } from 'src/app/modules/user/components/email-verification-modal/email-verification-modal.component';
import { AuthModalComponent } from 'src/app/modules/user/components/auth-modal/auth-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _authUser = new BehaviorSubject<User>(null);
  readonly authUser = this._authUser.asObservable();

  constructor(
		private http: HttpClient,
		private dialog: MatDialog
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

	setAuthUser(user: any){

		this._authUser.next(user);
	}

	startRegister(): Observable<any> {

		return new Observable((observer) => {

			this.openRegisterModal().subscribe(res => {

				if(res && res.event == 'register'){

					this.openEmailVerificationModal().subscribe(res => {

						observer.next('register');
						observer.complete();
					});
				}else{

					observer.next('closed');
					observer.complete();
				}
			});
		});
	}

	openLoginModal(){

		return this.dialog.open(AuthModalComponent, {
			panelClass: 'login-modal',
			data: {
				view: 'login'
			}
		}).afterClosed();
	}

	openRegisterModal(){

		return this.dialog.open(AuthModalComponent, {
			panelClass: 'register-modal',
			data: {
				view: 'register'
			}
		}).afterClosed();
	}

	openEmailVerificationModal(){

		return this.dialog.open(EmailVerificationModalComponent, {
			panelClass: 'email-verification-modal'
		}).afterClosed();
	}
}
