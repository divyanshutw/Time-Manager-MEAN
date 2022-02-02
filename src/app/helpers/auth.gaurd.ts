import {Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserType } from '../enum/enum';
import { User } from '../model/user';

import { LoginServiceService } from '../services/login-service.service';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate{
    constructor(
        private router:Router,
        private loginService:LoginServiceService
    ){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean {
        const currentUser=this.loginService.currentUserValue;
        console.log("auth.guard.ts L17 ",currentUser,route.data['roles'].indexOf(currentUser.role));
        console.log(`auth.guard.ts L20 currentUser: ${currentUser} route:${route.data['roles']}  rroute.data.roles${route.data['roles'].indexOf(currentUser.role)}`);

        if(currentUser){
            //route.data['roles'].indexOf(currentUser.role)=UserType.Admin and has been set in app-routing.module.ts
            if(route.data['roles'] && route.data['roles'].indexOf(currentUser.role)===UserType.Admin){
                
                this.router.navigate(['/']);

                return false;

            }
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl:state.url } });
        return false;
    }
}