import { User } from "../../models/user.model";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

@Injectable()
export class AuthService {
    private user: User;

    constructor(private http: Http) { }

    addUser(user: User) {

        const bodyReq = JSON.stringify(user);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user', bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => {
                const responseEmJSON = responseRecebida.json();
                const msg = responseEmJSON.objMessageSave;
                console.log(msg);    
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    /*getUser() {
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
    }*/

}