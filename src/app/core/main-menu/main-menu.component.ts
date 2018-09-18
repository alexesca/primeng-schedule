import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'main-menu',
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

    items: MenuItem[];

    constructor() { }

    ngOnInit() {
        this.items = [
            {
                label: 'Pipeline',
                icon: 'pi pi-fw pi-align-justify',
                routerLink: ['/pipeline']
            },
            {
                label: 'New Lead',
                icon: 'pi pi-fw pi-user-plus'
            },
            {
                label: 'Contracts',
                icon: 'pi pi-fw pi-copy',
                items: [
                    { label: 'Unsigned', icon: 'pi pi-fw pi-user' },
                    { label: 'Signed', icon: 'pi pi-fw pi-users' }
                ]
            }
        ];
    }

}
