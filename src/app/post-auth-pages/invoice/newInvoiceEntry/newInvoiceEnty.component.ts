import { Component } from '@angular/core';
@Component({
    selector: 'new-invoice',
    templateUrl: './newInvoiceEntry.component.html'
})

export class NewInvoiceEntry {
    constructor() {
        console.log("new invoice entry calling");
    }
}