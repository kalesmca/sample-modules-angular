import { NgModule } from '@angular/core';
import { BankRoutingModule } from './bank-routing.modules';
import { BankEntriesList } from './bankEntriesList/bankEntriesList.component';
import { NewBankEntries } from './newBankEntries/newBankEntries.component';

@NgModule({
    declarations: [BankEntriesList, NewBankEntries],
    imports: [BankRoutingModule]
})

export class BankModule {

}
