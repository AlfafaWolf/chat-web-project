import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styles: [':host { width: 100% }']
})

export class SigninComponent implements OnInit {
    myForm: FormGroup;

    onSubmit() {    
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