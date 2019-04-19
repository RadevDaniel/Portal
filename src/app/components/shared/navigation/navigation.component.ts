import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
  username: string;
  isAuthenticated: boolean;
  isAdmin: boolean;
  userImg: string
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngDoCheck() {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.isAdmin = this.authService.isAdmin;
    if(this.isAuthenticated){
      let user = this.authService.getDecodedUser();
      this.userImg = user['image'];
      this.username = localStorage.getItem('username');
    }
 
  };

  logout(): void {
    this.authService.logout().subscribe(() => {
        this.authService.clearSession();
        this.router.navigate([ '/home' ])
      });
  };
}
