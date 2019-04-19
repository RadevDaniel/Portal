import { Component, OnInit, ViewChild, ViewContainerRef, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

//Externals
import UserModel from 'src/app/models/user.model';
import { UserService } from 'src/app/core/services/user.servive';

@Component({
    selector: 'app-user-detail',
    templateUrl: './user-detail.component.html',
    styleUrls: [ './user-detail.component.css' ]
})
export class UserDetailComponent implements OnInit{
    @ViewChild("outlet", {read: ViewContainerRef}) outletRef: ViewContainerRef;
    @ViewChild("content", {read: TemplateRef}) contentRef: TemplateRef<any>;

    user: UserModel
    users$: Observable<UserModel[]>;
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private userService: UserService
    ){}

    ngOnInit(){
        const data = this.route.snapshot.data['ueserR'];
        this.user = data[0];

        this.users$ = this.userService.getUsers();
    }

    ngAfterContentInit() {
        this.outletRef.createEmbeddedView(this.contentRef);
    };
    
      private rerender() {
        this.outletRef.clear();
        this.outletRef.createEmbeddedView(this.contentRef);
      };
    
      reloadContent(event){
        if(this.route.snapshot.params['id'] == event['_id']) return;
        this.router.navigate([`users/details/${event._id}`]);
        this.user = event;
        this.rerender();
      };

    
}