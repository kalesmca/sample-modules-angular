import { NgModule } from '@angular/core';

import { loginRoutingModule } from './login-routing.module';
import { LoginPage } from './loginPage/login.component';

@NgModule({
    declarations: [LoginPage],
    imports: [loginRoutingModule]
})

export class LoginModule {

}