import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

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
    let body: object = this.registerForm.value;
    body['rating'] = 0;
    body['reviewers'] = 0;
    this.authService.register(body).subscribe((data) => {
        console.log(data);
        //this.router.navigate([ '/login' ]);
    });
  };

}
