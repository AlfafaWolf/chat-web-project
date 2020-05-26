import { Component } from "@angular/core";
import { AuthService } from "../services/auth.services";
import { Router } from "@angular/router";

@Component({
    selector: 'app-logout',
    templateUrl: 'logout.component.html',
    styles: [':host { width: 100% }']
})

export class LogoutComponent {
    constructor(private authService: AuthService, private router: Router) { }
    onLogout() { 
            this.authService.logOff();
            this.router.navigate(['/autenticacao/signin']);
    }
}