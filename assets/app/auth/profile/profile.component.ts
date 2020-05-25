import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user.model';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: [':host{ width: 100%;}']
})

export class ProfileComponent implements OnInit{

    @Input() user : User;

    ngOnInit(): void {
        this.user = new User('teste@teste', '123', 'Anonimo', 'Teste');
    }
}