import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { BankEntriesList } from './bankEntriesList/bankEntriesList.component';
import { NewBankEntries } from './newBankEntries/newBankEntries.component';

const bankRoutes: Routes = [{
    path: 'new-entry', component: NewBankEntries
}, {
    path: 'bank-list', component: BankEntriesList
}];
@NgModule({
    imports: [RouterModule.forChild(bankRoutes)],
    exports: [RouterModule]
})

export class BankRoutingModule {

}