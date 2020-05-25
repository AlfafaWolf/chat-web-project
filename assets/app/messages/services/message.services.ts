import { Message } from "../../models/message.model";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class MessageService {
    private messageSService: Message[] = [];

    constructor(private http: Http) { }

    addMessage(message: Message) {

        const bodyReq = JSON.stringify(message);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/message', bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => {
                const responseEmJSON = responseRecebida.json();
                const msg = responseEmJSON.objMessageSave;
                this.messageSService.push(new Message(msg.content, 'Anônimo', msg._id, null ));
                console.log(this.messageSService);
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    getMessages() {
        //return this.messageSService;
        return this.http.get('http://localhost:3000/message')
            .map((responseRecebida: Response) => {
                const responseEmJSON = responseRecebida.json(); 
                const messageSResponseRecebida = responseEmJSON.objSMessageSRecuperadoS;
                let transfomedCastMessagesModelFrontend: Message[] = [];
                for (const msg of messageSResponseRecebida) {
                    transfomedCastMessagesModelFrontend.push(
                        new Message(msg.content, 'Anônimo', msg._id, null));
                }
                this.messageSService = transfomedCastMessagesModelFrontend;
                console.log(this.messageSService);
                return transfomedCastMessagesModelFrontend;
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    deleteMessage(message: Message) {
        //this.messageSService.splice(this.messageSService.indexOf(message), 1);
        console.log(this.messageSService);

        return this.http.delete(`http://localhost:3000/message/${message.messageId}`)
            .map((responseRecebida: Response) => {
                for (const msg of this.messageSService) {
                    if (msg.messageId === message.messageId) {
                        this.messageSService.splice(this.messageSService.indexOf(msg), 1);
                        break;
                    }
                }
                return responseRecebida.json();
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    editMessage(message: Message) {
        const body = { content: message.content }
        return this.http.put(`http://localhost:3000/message/${message.messageId}`, body)
            .map((responseRecebida: Response) => {
                const responseEmJSON = responseRecebida.json();
                const msgAlterada = responseEmJSON.changedMessage;

                for (const msg of this.messageSService) {
                    if (msg.messageId === message.messageId) {
                        this.messageSService[this.messageSService.indexOf(msg)] = new Message(msgAlterada.content, 'Anônimo', msgAlterada._id, null);
                        break;
                    }
                }
                return responseRecebida.json();
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }
}