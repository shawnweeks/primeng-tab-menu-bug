import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [CommonModule, TabMenuModule],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css'
})
export class TopMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: '/', routerLinkActiveOptions: { exact: true } },
      { label: 'First', icon: 'pi pi-fw pi-calendar', routerLink: '/first' },
      { label: 'Second', icon: 'pi pi-fw pi-pencil', routerLink: '/second' },      
    ];
  }
}
