import { Routes, RouterModule } from "@angular/router";
import { MessagesComponent } from "./messages/messages.component";
//import { AuthenticationComponent } from "./auth/authentication.component";
import { AUTH_ROUTES } from "./auth/auth.routers";
import { AuthGuard } from "./guards/auth.guard";
import { NotFoundComponent } from "./notfound/notfound.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/mensagens', pathMatch: 'full' },
    { path: 'mensagens', component: MessagesComponent , canActivate: [AuthGuard]},
    ...AUTH_ROUTES,
    { path: '404', component: NotFoundComponent },
    { path: '**', redirectTo: '404' }
    //{ path: 'autenticacao', component: AuthenticationComponent, children: AUTH_ROUTES }
];

export const myrouting = RouterModule.forRoot(APP_ROUTES);
