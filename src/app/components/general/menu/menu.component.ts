import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'Inicio', icon: 'pi pi-home', routerLink: [''], },
      {
        label: 'Inventario', icon: 'pi pi-list', items: [
          { label: 'Productos', icon: 'pi pi-folder', routerLink: ['productos'] },
          { label: 'Categorías', icon: 'pi pi-tags', routerLink: ['categorias'] },
          { label: 'Marcas', icon: 'pi pi-tags', routerLink: ['marcas'] }
        ]
      },
      {
        label: 'Edit',
        items: [
          { label: 'Undo', icon: 'pi pi-refresh' },
          { label: 'Redo', icon: 'pi pi-repeat' }
        ]
      }];
  }
}
