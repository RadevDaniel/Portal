import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials } from '../../../environments/environment';

const APP_KEY = credentials.key;
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private CREATE = `${this.BASE_URL}/store`;
  private ALL_PRODUCTS = `${this.BASE_URL}/store?query={}&sort={"_kmd.ect": -1}`;

  constructor(
    private http: HttpClient
  ) { }

  uploadProduct(body: Object){
    return this.http.post(this.CREATE, body);
  };

  editProduct(body: Object, id: string){
    return this.http.put(this.CREATE + `/${id}`, body);
  };

  getProductById(id: string){

  };

  getAllProducts(){
    return this.http.get<Object[]>(this.ALL_PRODUCTS);
  };

}
