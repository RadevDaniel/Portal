import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { GuestService } from 'src/app/core/services/guest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isLoginForm: boolean = true;
  labelMassege: string = 'Already have an account?';
  labelAction: string = 'Register';
  labelHeader: string = 'Login';
  users: Object;

  constructor(
    private authService: AuthenticationService,
    private guestService: GuestService
  ) { };

  ngOnInit() {
    this.guestService.loginGuest({username: 'guest', password: 'guest'}).subscribe(
      ()=>{
        this.guestService.getPopularUsers().subscribe(
          (data)=> {this.users = data}
        )
      }
    );
  };

  switchForm(event): void{
    this.isLoginForm = !this.isLoginForm;

    this.labelMassege = 'Already have an account?';
    this.labelAction = 'Register';
    this.labelHeader = 'Login';

    if(!this.isLoginForm){
      this.labelMassege = "Don't have an account?";
      this.labelAction = 'Login';
      this.labelHeader = 'Register';
    }
  };

  get isAuthenticated(){
    return this.authService.isAuthenticated();
  };

}
