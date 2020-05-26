import { Injectable } from "@angular/core";
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../auth/services/auth.services";

@Injectable()

export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> |boolean {
        if (this.authService.userAutenticado == true){
            return true;
        } 
        this.router.navigate(['/autenticacao/signin']);
        return true;
    }
 
} 
