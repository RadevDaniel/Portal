import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';


@Injectable({
  providedIn: 'root'
})
export class AdmiGuard implements CanActivate {

  constructor(
    private authService : AuthenticationService,
    private router : Router
  ) { }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    
    if (this.authService.isAdmin) {
      return true;
    }  

    this.router.navigate(['/home']);
    return false;
  };
}