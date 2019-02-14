import { Component } from '@angular/core';

@Component({
    selector: 'invoice-list',
    templateUrl: './invoiceList.component.html'
})

export class InvoiceListComponent {
    constructor() {
        console.log("Invoice list calling");
    }
}