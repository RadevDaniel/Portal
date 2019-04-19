import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

//Services
import { UserService } from 'src/app/core/services/user.servive';

//Models
import UserModel from 'src/app/models/user.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin-users',
    templateUrl: './admin-users.component.html',
    styleUrls: [ './admin-users.component.css' ]
})
export class AdminUsersComponent implements OnInit {
    users$: Observable<UserModel[]>
    constructor(
        private userService: UserService,
        private router: Router
    ){}

    ngOnInit(){
        this.loadUsers();
    };

    loadUsers(): void {
        this.users$ = this.userService.getUsers();
    };

    goToUser(id: string){
        this.router.navigate(['/users/details/' + id])
    };
  
    deleteUser(id: string){
        console.log(id)
        this.userService.deleteUser(id).subscribe((data) => {
            this.loadUsers();
        });
    };
}
