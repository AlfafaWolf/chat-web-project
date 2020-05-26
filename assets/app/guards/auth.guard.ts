import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { AuthService } from "../auth/services/auth.services";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router){ }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean {
        if (this.authService.isLogged()){
            return true;
        } 
        console.log(this.authService.isLogged());
        this.router.navigate(['/signin']);
        return false;
    }
}