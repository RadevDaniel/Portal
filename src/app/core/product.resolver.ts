import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/Router';
import { Injectable } from '@angular/core';
import ProductModel from '../models/product.model';
import { StoreService } from './services/store.service';

@Injectable({
    providedIn: 'root'
})
export class ProductResolver implements Resolve<ProductModel>{

    constructor(
        private storeService: StoreService
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const id = route.params['id'];

        return this.storeService.getProductById(id);
    }
    
}