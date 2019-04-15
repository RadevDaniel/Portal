import { HttpResponse, HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { credentials } from '../../../environments/environment';
import { AuthenticationService } from '../services/authentication.service';
import { GuestService } from '../services/guest.service';
//import { ToastrService } from 'ngx-toastr';

const APP_KEY = credentials.key;
const APP_SECRET = credentials.secret;

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor{

    constructor(
        private authService: AuthenticationService,
        private guestService: GuestService
        //private toastr: ToastrService
    ){}

    intercept(req: HttpRequest<any>, next: HttpHandler){
        if(req.url.endsWith(`user/${APP_KEY}`) || req.url.endsWith('/login')){
            req = req.clone({
                setHeaders: {
                    'Authorization': `Basic ${btoa(`${APP_KEY}:${APP_SECRET}`)}`
                }
            });
        }else if(req.url.endsWith(`user/${APP_KEY}?query={"rating":{"$gte":3}}`)){
            req = req.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${this.guestService.getToken()}`
                }
            });
        } else{
            req = req.clone({
                setHeaders: {
                    'Authorization': `Kinvey ${this.authService.getToken()}`
                }
            });
        }

        return next.handle(req).pipe(
            tap((event: HttpEvent<any>)=>{
                if(event instanceof HttpResponse && (req.url.endsWith('/login') || req.url.endsWith(`user/${APP_KEY}`))){
                   // this.toastr.success('Logged In!', 'Success');
                   this.authService.saveSession(event.body, req.body.username);
                }
            })
        );
    }
}