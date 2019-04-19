import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms'
import { AuthenticationService } from 'src/app/core/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm : NgForm;
  
  constructor(
    private authService: AuthenticationService
  ){ };

  ngOnInit() {
  };

  login() {
    this.authService.login(this.loginForm.value).subscribe((data) => {
      console.log(data)
    });
  };

}
