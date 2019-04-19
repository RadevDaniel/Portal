import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/Router';
import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';

//External
import { UserService } from '../services/user.servive';
import UserModel from 'src/app/models/user.model';
import ProductModel from 'src/app/models/product.model';

@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<[UserModel,ProductModel[]]>{

    constructor(
        private userService: UserService
    ){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        const id = route.params['id'];
        return forkJoin(
            this.userService.getUserById(id),
            this.userService.getUserProducts(id)
        )
    }
    
}