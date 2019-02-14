import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoiceListComponent } from './InvoiceList/invoiceList.component';
import { NewInvoiceEntry } from './newInvoiceEntry/newInvoiceEnty.component';

const invoiceRoutes: Routes = [
    {
        path: 'new-invoice', component: NewInvoiceEntry
    }, {
        path: 'invoice-list', component: InvoiceListComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(invoiceRoutes)],
    exports: [RouterModule]

})

export class InvoiceRoutingModule {

}