import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials, roles } from '../../../environments/environment';
import { Observable } from 'rxjs';
import UserModel from 'src/app/models/user.model';

const APP_KEY = credentials.key;
const ADMIN_ROLE = roles.admin;
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  uRole: string = 'user';
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

  isAuthor(creatorId: string): boolean {
    return this.userId == creatorId; 
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
  };

  setUserRole(role: Array<Object>){
    if(!role){ this.uRole = 'user'; return;}
    for(let i = 0, len = role.length; i < len; i++){
      if(role[i]['roleId'] = ADMIN_ROLE){
       this.uRole = 'admin';
      }
    }
  };

  get userId(): string {
    return localStorage.getItem('userId');
  };

  get isAdmin(): boolean {
    return this.getPermission() !== 'user';
  };

  saveSession(res: UserModel, req: string): void {
    if(req === 'guest'){ 
      this.saveGuestSession(res['_kmd']['authtoken'])
      return;
    }
    this.setUserRole(res['_kmd']['roles']);
    const encUser = btoa(JSON.stringify(res));
    localStorage.setItem('username', res['username']);
    localStorage.setItem('permission', this.uRole);
    localStorage.setItem('userId', res['_id']);
    localStorage.setItem('user', encUser);
    localStorage.setItem('token', res['_kmd']['authtoken']);
  };
}
