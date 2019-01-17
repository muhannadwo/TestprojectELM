import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Location } from '@angular/common';
import { AuthenticationService } from 'src/app/authintication/authentication.service';
import { RouterLink } from '@angular/router/src/directives/router_link';



@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authinticationService : AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    return next.handle(request).pipe(catchError(err => {

        if(err.status === 401){
            this.authinticationService.logout();
            // Location.reload(true);
                }

        

        const error = err.error.message || err.statusText;
        return throwError(error);
    }));

}}
    