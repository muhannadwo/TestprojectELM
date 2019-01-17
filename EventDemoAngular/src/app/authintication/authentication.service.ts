import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { config } from 'rxjs/internal/config';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    Role$: string;
    usrid;
    constructor(private http: HttpClient) { }


    login(username: string, password: string) {
        let headers = new HttpHeaders();
        headers = headers.append('Authorization','Basic '+ btoa(`${username}:${password}`));
        return this.http.get<any>('/userLogin' , { headers: headers })
            .pipe(map(user => {
                // login successful if there's a user in the response
                if (user) {
                    // store user details and basic auth credentials in local storage 
                    // to keep user logged in between page refreshes
                    user.authdata = btoa(`${username}:${password}`);
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    // user = JSON.parse(localStorage.getItem('currentUser'));
                    this.Role$ = user.Role;
                    this.usrid = user.userId;

                }
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }

    getrole(){
        if(JSON.parse(localStorage.getItem('currentUser')))
        this.Role$ = JSON.parse(localStorage.getItem('currentUser')).Role;
        
        return this.Role$;
    }

    getId(){
        if(JSON.parse(localStorage.getItem('currentUser')))
        this.usrid = JSON.parse(localStorage.getItem('currentUser')).userId;
        return this.usrid;
    }

    
    
}