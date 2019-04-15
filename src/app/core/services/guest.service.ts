import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials } from '../../../environments/environment';

const APP_KEY = credentials.key;

@Injectable({
  providedIn: 'root'
})
export class GuestService {
  private BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;

  constructor(
    private http: HttpClient
  ) { }

  loginGuest(body: Object){
    return this.http.post(`${this.BASE_URL}/login`, body);
  };

  getPopularUsers(){
    return this.http.get(`${this.BASE_URL}?query={"rating":{"$gte":3}}`);
  };
  
  getToken() {
    return localStorage.getItem('guestToken');
  };

}
