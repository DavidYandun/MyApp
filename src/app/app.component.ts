import { MenuItem } from 'primeng/api/menuitem';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  display: boolean = false;

  breadcrumb: MenuItem[] = [
    { label: 'Inicio', routerLink: '' },
    { label: 'Productos', routerLink: 'productos' }
  ];


}