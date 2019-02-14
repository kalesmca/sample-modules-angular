import { NgModule } from '@angular/core';
import { InvoiceRoutingModule } from './invoice-routing.module';
import { InvoiceListComponent } from '../invoice/InvoiceList/invoiceList.component';
import { NewInvoiceEntry } from './newInvoiceEntry/newInvoiceEnty.component';

@NgModule({
    declarations: [InvoiceListComponent, NewInvoiceEntry],
    imports: [InvoiceRoutingModule]

})

export class InvoiceModule {

}
