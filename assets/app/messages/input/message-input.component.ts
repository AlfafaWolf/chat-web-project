import { Component } from '@angular/core';
import { MessageService } from '../services/message.services';
import { Message } from '../../models/message.model';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styles: [':host{ width: 100%;}']
})

export class MessageInputComponent {
    constructor(private messageService: MessageService) { }

    onSubmit(form: NgForm) {
        const messageAux = new Message(form.value.myContentngForm, 'Anônimo');
        this.messageService.addMessage(messageAux)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );
        console.log(form);
        form.resetForm();
    }

    // onSave(textoConsole: string) {
    //     const messageAux = new Message(textoConsole, 'Anon');
    //     this.messageService.addMessage(messageAux); 
    //     console.log(textoConsole);
    // }
}