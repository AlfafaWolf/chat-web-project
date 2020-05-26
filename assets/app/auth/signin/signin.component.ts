import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {User} from '../../models/user.model';
import {AuthService} from '../services/auth.services';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styles: [':host { width: 100% }']
})

export class SigninComponent implements OnInit {
    myForm: FormGroup;

    constructor(private authService: AuthService, private router: Router) { }

    onSubmit() {
        
        const { emailTS, passwordTS} = this.myForm.value;
        const user = new User(emailTS, passwordTS);
        this.authService.getUser(user)
        .subscribe(
            dadosSucesso => 
            {
                if(dadosSucesso){
                    this.router.navigate(['/mensagens'])
                }
                else{
                    console.log("Senha incorreta");
                }
            },
            dadosErro => console.log(dadosErro)
        );
        console.log(this.myForm); console.log(this.myForm.value);
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null, Validators.required)
        });
    }
}