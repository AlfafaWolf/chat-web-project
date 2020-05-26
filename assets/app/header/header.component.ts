import { Component } from "@angular/core";
import { AuthService } from "../auth/services/auth.services";
import { Router } from "@angular/router";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent {
    constructor(private authService: AuthService, private router: Router) { }

    onLogout() {
        this.authService.logOff();
        this.router.navigate(['/signin']);
    }
}
