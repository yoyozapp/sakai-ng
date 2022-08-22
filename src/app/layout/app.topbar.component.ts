import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from './service/app.layout.service';
import { timer } from 'rxjs';

@Component({
    selector: 'app-topbar',
    templateUrl: './app.topbar.component.html',
})
export class AppTopBarComponent {
    time?: Date;
    items!: MenuItem[];

    constructor(public layoutService: LayoutService) {}
    ngOnInit(): void {
        timer(0, 1000).subscribe(() => {
            this.time = new Date();
        });
    }
}
