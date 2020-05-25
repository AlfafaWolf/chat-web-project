import { Component } from '@angular/core';
import { Message } from './models/message.model';
import { MessageService } from './messages/services/message.services';
import {AuthService} from "./auth/services/auth.services";
@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    providers: [MessageService, AuthService]
})
export class AppComponent {

    // messageS: Message[] = [
    //     new Message("Texto mensagem", "Anonimo"),
    //     new Message("Texto 2 mensagem", "Anonimo 2"),
    //     new Message("Texto 3 mensagem", "Anonimo 3"),
    // ];


    messageBinding: Message = new Message("Texto mensagem", "Anonimo");
    messageBindingAlias: Message = new Message("Texto mensagem alias", "Anonimo Alias");
    textSize = 20;
}
