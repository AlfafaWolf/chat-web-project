import { Component, OnInit } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessageService } from '../services/message.services';

@Component({
    selector: 'app-message-list',
    templateUrl: './message-list.component.html',
    styles: [':host{ width: 100%;}']
})

export class MessageListComponent implements OnInit {
    /*messageS: Message[] = [
        new Message("Texto da mensagem-List", "Anonimo"),
        new Message("Texto 2 da mensagem-List", "Anonimo 2"),
        new Message("Texto 3 da mensagem-List", "Anonimo 3"),
    ];*/

    messageS: Message[];

    constructor(private messageService: MessageService) { }
    
    ngOnInit(): void {
        this.messageService.getMessages()
            .subscribe(
                (dadosSucesso: Message[]) => {
                    this.messageS = dadosSucesso;
                    console.log(dadosSucesso);
                },
                dadosErro => console.log(dadosErro)
        );
    }
}