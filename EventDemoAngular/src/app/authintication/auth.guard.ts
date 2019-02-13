import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from 'src/app/authintication/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private auth: AuthenticationService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            if(route.data.expectedRole)
            {
                if( this.auth.getrole() === route.data.expectedRole.toString())
                {
                    return true
                }
                return false;
            }
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate((['/login']), { queryParams: { returnUrl: state.url }});
        return false;
    }
}