import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials } from '../../../environments/environment';
import { Observable } from 'rxjs';
import UserModel from 'src/app/models/user.model';

const APP_KEY = credentials.key;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(
    private http: HttpClient
  ) { }

  register(body: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.BASE_URL, body);
  };

  login(body: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(`${this.BASE_URL}/login`, body);
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

  getDecodedUser(): UserModel{
    const encodedUser = localStorage.getItem('user');
    const decodedUser = atob(encodedUser);
    return JSON.parse(decodedUser);
  }

  isAuthenticated(): boolean {
    return this.getToken() !== null;
  };

  saveGuestSession(res: string): void{
    localStorage.setItem('guestToken', res);
  };

  clearSession(): void{
    localStorage.removeItem('username')
    localStorage.removeItem('permission')
    localStorage.removeItem('userId')
    localStorage.removeItem('user')
    localStorage.removeItem('token');
  }

  saveSession(res: UserModel, req: string): void {
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
