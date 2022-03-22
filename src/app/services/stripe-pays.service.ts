import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StripePaysService {

  constructor(
  	private http: HttpClient
  ) { }

  createPaymentIntent(amount: number): Observable<any>{

  	return this.http.post<any>(`${environment.api}/create-payment-intent`, {
  		amount
  	})
  }

  checkPay(paymentId: string, tournamentId): Observable<any> {

  	return this.http.post<any>(`${environment.api}/check-pay`, {
  		paymentId
  	});
  }
}
