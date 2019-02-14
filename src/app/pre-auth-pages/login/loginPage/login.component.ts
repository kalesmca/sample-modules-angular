import { Component } from '@angular/core';

@Component({
    selector: 'login-page',
    templateUrl: './logint.component.html'
})

export class LoginPage {
    constructor() {
        console.log("login page calling");
    }
}