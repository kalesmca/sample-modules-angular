import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPage } from './loginPage/login.component';

const loginRoutes: Routes = [{
    path: '', component: LoginPage
}]
@NgModule({
    imports: [RouterModule.forChild(loginRoutes)],
    exports: [RouterModule]
})

export class loginRoutingModule {

}