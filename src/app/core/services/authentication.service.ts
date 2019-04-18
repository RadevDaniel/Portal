import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials } from '../../../environments/environment';
import { Observable } from 'rxjs';

const APP_KEY = credentials.key;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(
    private http: HttpClient
  ) { }

  register(body: Object): Observable<Object> {
    return this.http.post(this.BASE_URL, body);
  };

  login(body: Object): Observable<Object> {
    return this.http.post(`${this.BASE_URL}/login`, body);
  };

  logout(): Observable<Object> {
    return this.http.post(`${this.BASE_URL}/_logout`, {});
  };

  getToken(): string {
    return localStorage.getItem('token');
  };

  get userId(): string {
    return localStorage.getItem('userId');
  }

  getPermission(): string {
    return localStorage.getItem('permission');
  };

  getDecodedUser(): Object{
    let encodedUser = localStorage.getItem('user');
    let decodedUser = atob(encodedUser);
    return JSON.parse(decodedUser);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  };

  saveGuestSession(res: string): void{
    localStorage.setItem('guestToken', res);
  };

  saveSession(res: Object, req: Object): void {
    if(req === 'guest'){ 
      this.saveGuestSession(res['_kmd']['authtoken'])
      return;
    }
    const encUser = btoa(JSON.stringify(res));
    localStorage.setItem('username', res['username']);
    localStorage.setItem('permission', res['isAdmin']);
    localStorage.setItem('userId', res['_id']);
    localStorage.setItem('user', encUser);
    localStorage.setItem('token', res['_kmd']['authtoken']);
  };
}
