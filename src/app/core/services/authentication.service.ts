import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials } from '../../../environments/environment';

const APP_KEY = credentials.key;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(
    private http: HttpClient
  ) { }

  register(body: Object) {
    return this.http.post(this.BASE_URL, body);
  };

  login(body: Object) {
    return this.http.post(`${this.BASE_URL}/login`, body);
  };

  logout() {
    return this.http.post(`${this.BASE_URL}/_logout`, {});
  };

  getToken() {
    return localStorage.getItem('token');
  };

  isAuthenticated() {
    return this.getToken() !== null;
  };

  saveGuestSession(res: string){
    localStorage.setItem('guestToken', res);
  };

  saveSession(res: Object, req: Object) {
    if(req === 'guest'){ 
      this.saveGuestSession(res['_kmd']['authtoken'])
      return this;
    }
    localStorage.setItem('username', res['username']);
    localStorage.setItem('permission', res['isAdmin']);
    localStorage.setItem('userId', res['_id']);
    localStorage.setItem('token', res['_kmd']['authtoken']);
  };
}
