import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessageService } from '../services/message.services';
import { AuthService } from '../../auth/services/auth.services';


@Component({
    selector: 'app-message',
    templateUrl: './message.component.html' 
})

export class MessageComponent {

    estaEditando: boolean = false;

    constructor(private messageServiceObj: MessageService, private authService: AuthService) { }

    @Input() messageVarClasse : Message = new Message("","");
    //@Input('inputMessage') messageVarClasseAlias : Message = new Message("","");

    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
    //@Output('outputMessage') editClicked_MessageMetodoClasseAlias = new EventEmitter<string>();

    onEdit() {
        //this.editClicked_MessageMetodoClasse.emit("Texto veio de mensagem (child) para app (pai)");
        //this.editClicked_MessageMetodoClasseAlias.emit("Texto veio de mensagem (child) para app (pai) - Alias");
        this.estaEditando = true;
    }

    submitEdit(value: string) {
        const msg = new Message(value, this.messageVarClasse.username, this.messageVarClasse.userId, this.messageVarClasse.messageId);
        this.messageServiceObj.editMessage(msg)
            .subscribe(
                dadosSucesso => {
                    return console.log(dadosSucesso);
                },
                dadosErro => {
                    return console.log(dadosErro);
                }
            );;
        this.cancelEdit();
    }

    cancelEdit() {
        this.estaEditando = false;
    }

    onDelete() {
        //this.messageServiceObj.deleteMessage(this.messageVarClasse);
        this.messageServiceObj.deleteMessage(this.messageVarClasse)
            .subscribe(
                dadosSucesso => console.log(dadosSucesso),
                dadosErro => console.log(dadosErro)
            );
    }

    isMessageOwner() {
        return this.messageVarClasse.userId === this.authService.getID();
    }
}

