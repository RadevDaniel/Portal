import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials } from '../../../environments/environment';
import { Observable } from 'rxjs';

const APP_KEY = credentials.key;

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(
    private http: HttpClient
  ) { }

  loginGuest(body: Object): Observable<Object>{
    return this.http.post(`${this.BASE_URL}/login`, body);
  };

  getPopularUsers(): Observable<Object[]>{
    return this.http.get<Object[]>(`${this.BASE_URL}?query={"rating":{"$gte":3}}`);
  };
  
  getToken(): string {
    return localStorage.getItem('guestToken');
  };

  get isGuestLoged(): boolean {
    return this.getToken() !== null;
  };

}
