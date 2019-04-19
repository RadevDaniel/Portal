import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { credentials } from '../../../environments/environment';
//models
import UserModel from 'src/app/models/user.model';
import ProductModel from 'src/app/models/product.model';

const APP_KEY = credentials.key;

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private BASE_URL = `https://baas.kinvey.com/user/${APP_KEY}`;
  private PRODUCTS_URL = `https://baas.kinvey.com/appdata/${APP_KEY}/store`;

  constructor(
    private http: HttpClient
  ) { }

  
  getUsers(): Observable<UserModel[]>{
    return this.http.get<UserModel[]>(`${this.BASE_URL}?query={}&sort={"rating": -1}`);
  };

  getUserById(id: string): Observable<UserModel>{
    return this.http.get<UserModel>(`${this.BASE_URL}/${id}`);
  };

  deleteUser(id: string): Observable<UserModel>{
    return this.http.delete<UserModel>(`${this.BASE_URL}/${id}`, {});
  };

  getUserProducts(id: string): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(`${this.PRODUCTS_URL}?query={"_acl.creator":"${id}"}&sort={"_kmd.ect": -1}`)
  };

}