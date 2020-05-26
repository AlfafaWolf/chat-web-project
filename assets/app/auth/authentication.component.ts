import { Component } from "@angular/core";
import { AuthService } from "./services/auth.services";

@Component({
    selector: 'app-authentication',
    template: ` <h1>Componente de Autenticação</h1>
                <header class="row spacing">
                    <nav class="col-md-8 col-md-offset-2">
                        <ul class="nav nav-tabs">
                            <li class="mx-3" routerLinkActive="active" *ngIf="!authService.isLogged()"><a [routerLink]="['signup']">Signup</a></li>
                            <li class="mx-3" routerLinkActive="active" *ngIf="!authService.isLogged()"><a [routerLink]="['signin']">Signin</a></li>
                            <li class="mx-3" routerLinkActive="active" *ngIf="authService.isLogged()"><a [routerLink]="['logout']">Logout</a></li>
                        </ul>
                    </nav>
                </header>
                <div class="row spacing">
                    <router-outlet></router-outlet>
                </div>
    `
})

export class AuthenticationComponent {
    constructor(private authService: AuthService) { }
}
