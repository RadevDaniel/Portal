import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { UserService } from 'src/app/core/services/user.servive';
import { Observable } from 'rxjs';

//Models
import ProductModel from 'src/app/models/product.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profile: Object;
  products$: Observable<ProductModel[]>
  constructor(
    private authService: AuthenticationService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.profile = this.authService.getDecodedUser();
    this.products$ = this.userService.getUserProducts(this.profile['_id']);
  };

  deleteUser(id: string){
    this.userService.deleteUser(id).subscribe((data) => {
      this.authService.clearSession();
      this.router.navigate([ '/home' ]);
    });
  }

}
