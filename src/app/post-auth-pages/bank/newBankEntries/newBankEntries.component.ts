import { Component } from '@angular/core';

@Component({
    selector: 'new-bank',
    templateUrl: './newBankEntries.component.html'
})

export class NewBankEntries {
    constructor() {
        console.log("new bank entries calling");
    }
}