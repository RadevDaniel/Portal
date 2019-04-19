import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials } from '../../../environments/environment';
import { Observable } from 'rxjs';
import UserModel from 'src/app/models/user.model';

const APP_KEY = credentials.key;

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(
    private http: HttpClient
  ) { }

  loginGuest(body: Object): Observable<UserModel>{
    return this.http.post<UserModel>(`${this.BASE_URL}/login`, body);
  };

  getPopularUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.BASE_URL}?query={"rating":{"$gte":3}}`);
  };
  
  getToken(): string {
    return localStorage.getItem('guestToken');
  };

  get isGuestLoged(): boolean {
    return this.getToken() !== null;
  };

}
