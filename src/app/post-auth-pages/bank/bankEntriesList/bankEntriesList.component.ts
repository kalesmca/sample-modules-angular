import { Component } from '@angular/core';

@Component({
    selector: 'bank-list',
    templateUrl: './bankEntriesList.component.html'
})

export class BankEntriesList {
    constructor() {
        console.log("Bank entries list calling");
    }

}