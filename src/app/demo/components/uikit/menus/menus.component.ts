import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';

@Component({
    templateUrl: './menus.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class MenusComponent implements OnInit {
    breadcrumbItems!: MenuItem[];

    tieredItems!: MenuItem[];

    items!: MenuItem[];

    routeItems!: MenuItem[];

    megaMenuItems!: MegaMenuItem[];

    panelMenuItems!: MenuItem[];

    stepsItems!: MenuItem[];

    slideItems!: MenuItem[];

    menuItems!: MenuItem[];

    plainMenuItems!: MenuItem[];

    pageIndex: number = 0;

    ngOnInit() {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({ label: 'Electronics' });
        this.breadcrumbItems.push({ label: 'Computer' });
        this.breadcrumbItems.push({ label: 'Notebook' });
        this.breadcrumbItems.push({ label: 'Accessories' });
        this.breadcrumbItems.push({ label: 'Backpacks' });
        this.breadcrumbItems.push({ label: 'Item' });

        this.routeItems = [
            { label: 'ข้อมูล-1', routerLink: 'personal' },
            { label: 'ข้อมูล-2', routerLink: 'seat' },
            { label: 'ทึ่อยู่', routerLink: 'payment' },
            { label: 'Confirmation', routerLink: 'confirmation' },
        ];
    }
}
