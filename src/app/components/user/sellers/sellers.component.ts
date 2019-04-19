import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.servive';
import { Observable } from 'rxjs';
import UserModel from 'src/app/models/user.model';

@Component({
    selector: 'app-sellers',
    templateUrl: './sellers.component.html',
    styleUrls: [ './sellers.component.css' ]
})
export class SellersComponent implements OnInit{
    users$: Observable<UserModel[]>   
    constructor(
        private userService: UserService
    ){}

    ngOnInit(){
        this.users$ = this.userService.getUsers();
    };
}