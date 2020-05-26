import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from "./app.component";
import { MessageComponent } from './messages/message/message.component';
import { TextSizeComponent } from './messages/textsize.component';
import { MessageListComponent } from './messages/list/message-list.component';
import { MessageInputComponent } from './messages/input/message-input.component';
import { MessagesComponent } from './messages/messages.component';
import { AuthenticationComponent } from './auth/authentication.component';
import { HeaderComponent } from './header/header.component';
import { myrouting } from './app.routing';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { ProfileComponent } from './auth/profile/profile.component';
import { MessageService } from './messages/services/message.services';
import { AuthService } from './auth/services/auth.services';
import { AuthGuard } from './guards/auth.guard';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        SignupComponent,
        SigninComponent,
        LogoutComponent,
        ProfileComponent,
        TextSizeComponent,
    ],
    imports: [BrowserModule, FormsModule, myrouting, ReactiveFormsModule, HttpModule],
    bootstrap: [AppComponent],
    providers: [MessageService, AuthService, AuthGuard]
})
export class AppModule {

}
