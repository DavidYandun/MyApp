import { MarcaInterface } from './../../../../modelos/marca';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listamarcas',
  templateUrl: './listamarcas.component.html',
  styleUrls: ['./listamarcas.component.css']
})
export class ListamarcasComponent implements OnInit {
  marcas: MarcaInterface[];
  constructor() { }

  ngOnInit() {
    this.marcas = [
      {
        id: 1,
        nombre: 'Maggi'
      },
      {
        id: 2,
        nombre: 'Oriental'
      }
    ]
  }

}
