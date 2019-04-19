import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import UserModel from 'src/app/models/user.model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @ViewChild('registerForm') registerForm: NgForm;

  constructor(
    private authService: AuthenticationService
  ) { };

  ngOnInit() {
  };

  register() {
    let body: UserModel = this.registerForm.value;
    body['rating'] = 0;
    body['reviewers'] = 0;
    body['isadmin'] = false;
    this.authService.register(body).subscribe((data) => {
        console.log(data);
    });
  };

}
