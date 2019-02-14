import { NgModule } from '@angular/core';
import { PostAuthRouteModules } from './postAuth-routing.module';
import { LayoutComponent } from './layout/layout.component';
@NgModule({
    imports: [PostAuthRouteModules],
    declarations: [LayoutComponent]
})

export class PostAuthModule {

}