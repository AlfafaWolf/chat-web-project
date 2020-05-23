import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Message } from '../../models/message.model';
import { MessageService } from '../services/message.services';


@Component({
    selector: 'app-message',
    templateUrl: './message.component.html' 
})

export class MessageComponent {

    constructor(private messageServiceObj: MessageService) { }

    @Input() messageVarClasse : Message = new Message("","");
    //@Input('inputMessage') messageVarClasseAlias : Message = new Message("","");

    @Output() editClicked_MessageMetodoClasse = new EventEmitter<string>();
    //@Output('outputMessage') editClicked_MessageMetodoClasseAlias = new EventEmitter<string>();

    onEdit() {
        this.editClicked_MessageMetodoClasse.emit("Texto veio de mensagem (child) para app (pai)");
        //this.editClicked_MessageMetodoClasseAlias.emit("Texto veio de mensagem (child) para app (pai) - Alias");
    }

    onDelete() {
        this.messageServiceObj.deleteMessage(this.messageVarClasse);
    }
}

