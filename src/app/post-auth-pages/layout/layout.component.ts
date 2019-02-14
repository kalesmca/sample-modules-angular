import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './layout.component.html'
})

export class LayoutComponent {
    constructor() {
        console.log("Layout component calling");
    }
}