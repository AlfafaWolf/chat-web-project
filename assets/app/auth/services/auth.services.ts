import { User } from "../../models/user.model";
import { Injectable } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";


@Injectable()
export class AuthService {
    private user: User = null;
    userAutenticado = false;

    constructor(private http: Http) { }

    isLogged(){
        return this.user != null;
    }

    addUser(user: User) {
        const bodyReq = JSON.stringify(user);
        const myHeaders = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user', bodyReq, {headers: myHeaders})
            .map((responseRecebida: Response) => {
                const responseEmJSON = responseRecebida.json();
                const msg = responseEmJSON.objMessageSave;
                const {_id, firstName, lastName, gender, password, email} = msg;
                this.user = new User(email, password, gender, firstName, lastName, _id);
                console.log(this.user);
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    getUser(user:User) {
        //return this.messageSService;
        const myHeaders = new Headers({'email': user.email});
        const options = {headers: myHeaders};
        return this.http.get('http://localhost:3000/user', options)
            .map((responseRecebida: Response) => {
                const responseEmJSON = responseRecebida.json(); 
                const msg = responseEmJSON.objUserRecuperado;
                const {_id, firstName, lastName, gender, password, email} = msg;
                if(user.password === msg.password){
                    this.user = new User(email, password, gender, firstName, lastName, _id);
                    this.userAutenticado = true;
                    console.log(this.user);
                    return true;
                }
                else{
                    return false;
                    
                }
            })
            .catch((errorRecebido: Response) => Observable.throw(errorRecebido.json()));
    }

    usuarioAutenticado(){
        return this.userAutenticado;
    }

    logOff(){
        console.log(this.user.email);
        this.user = null;
        console.log(this.user);
    }

}