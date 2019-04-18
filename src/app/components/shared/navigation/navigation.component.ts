import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  username: string;
  isAuthenticated: boolean;
  userImg: string
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit() {
 
  }

  ngDoCheck() {
    this.isAuthenticated = this.authService.isAuthenticated();
    if(this.isAuthenticated){
      let user = this.authService.getDecodedUser();
      this.userImg = user['image'];
      this.username = localStorage.getItem('username');
      console.log(user)
    }
 
  };

  logout(): void {
    this.authService.logout().subscribe(() => {
        localStorage.clear();
        this.router.navigate([ '/home' ])
      });
  };
}
