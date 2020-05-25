import { User } from "../../models/user.model"
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import {AuthService} from "../services/auth.services"

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styles: [':host { width: 100% }']
})

export class SignupComponent implements OnInit {
    constructor(private authService: AuthService) { }
    myForm: FormGroup;

    onSubmit() {
        const { emailTS, passwordTS, genderTS, firstNameTS, lastNameTS } = this.myForm.value;
        const user = new User(emailTS, passwordTS, genderTS, firstNameTS, lastNameTS);
        console.log(user);
        this.authService.addUser(user)
        .subscribe(
            dadosSucesso => console.log(dadosSucesso),
            dadosErro => console.log(dadosErro)
        );
        console.log(this.myForm.value);
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            firstNameTS: new FormControl(null, Validators.required),
            lastNameTS: new FormControl(null, Validators.required),
            genderTS: new FormControl(null, Validators.required),
            emailTS: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9\-\_\.]+")
            ]),
            passwordTS: new FormControl(null, Validators.required)
        })
    }
}