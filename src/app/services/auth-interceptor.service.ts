import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class AuthInterceptorService {

	constructor() { }

	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

		const AUTH_TOKEN = localStorage.getItem("auth_token");

		if(AUTH_TOKEN) {

			const CLONED = req.clone({
				headers: req.headers.set("Authorization", `Bearer ${AUTH_TOKEN}`)
			});

			return next.handle(CLONED);
		}
		else {
			return next.handle(req);
		}
	}
}
