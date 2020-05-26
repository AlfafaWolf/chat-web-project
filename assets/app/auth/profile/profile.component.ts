import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { AuthService } from '../services/auth.services';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styles: [':host{ width: 100%;}']
})

export class ProfileComponent implements OnInit{

    constructor(private authService: AuthService) { }

    @Input() user : User;

    ngOnInit(): void {
        this.user = this.authService.getSession();
    }
}