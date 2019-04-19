import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { credentials } from '../../../environments/environment';

//models
import ProductModel from 'src/app/models/product.model';
import { Observable } from 'rxjs';

const APP_KEY: string  = credentials.key;
@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private BASE_URL = `https://baas.kinvey.com/appdata/${APP_KEY}`;
  private STORE_URL = `${this.BASE_URL}/store`;
  private ALL_PRODUCTS = `${this.BASE_URL}/store?query={}&sort={"_kmd.ect": -1}`;

  constructor(
    private http: HttpClient
  ) { }

  uploadProduct(body: ProductModel): Observable<Object>{
    return this.http.post(this.STORE_URL, body);
  };

  editProduct(body: ProductModel, id: string): Observable<Object>{
    return this.http.put(this.STORE_URL + `/${id}`, body);
  };

  getProductById(id: string): Observable<ProductModel>{
    return this.http.get<ProductModel>(this.STORE_URL + `/${id}`);
  };

  getAllProducts(): Observable<ProductModel[]>{
    return this.http.get<ProductModel[]>(this.ALL_PRODUCTS);
  };

  deleteProduct(id: string): Observable<Object> {
    let action = this.http.delete(this.STORE_URL + `/${id}`);
    return action;
  };

}
