import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
const postRoutes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [
        {
            path: 'bank', loadChildren: './bank/bank.module#BankModule'
        }, {
            path: 'invoice', loadChildren: './invoice/invoice.module#InvoiceModule'
        }
    ]
}
]
@NgModule({
    imports: [RouterModule.forChild(postRoutes)],
    exports: [RouterModule]
})

export class PostAuthRouteModules {

}