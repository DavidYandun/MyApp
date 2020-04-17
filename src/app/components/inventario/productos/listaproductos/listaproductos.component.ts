import { Component, OnInit } from '@angular/core';
import { ProductoInterface } from 'src/app/modelos/producto';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {

  productos: ProductoInterface[];

  constructor() { }

  ngOnInit() {
    this.productos = [
      {
        id: 1,
        codigo: 'PROD_1',
        idubicacion: 1,
        idcategoria: 1,
        idmarca: 1,
        nombre: 'Arroz',
        entradas: 0,
        salidas: 0,
        stock: 10,
        unidadmedida: 'kilos',
        preciocompra: 11.00,
        precioventa: 15.00,
        precioventamayor: 14.00,
        servicio: false,
        estado: true,
        descripcion: 'Sin descripción'
      },
      {
        id: 2,
        codigo: 'PROD_2',
        idubicacion: 1,
        idcategoria: 1,
        idmarca: 1,
        nombre: 'Azucar',
        entradas: 0,
        salidas: 0,
        stock: 34,
        unidadmedida: 'libras',
        preciocompra: 8.00,
        precioventa: 13.00,
        precioventamayor: 10.00,
        servicio: false,
        estado: true,
        descripcion: 'Sin descripción'
      },
      {
        id: 3,
        codigo: 'PROD_3',
        idubicacion: 1,
        idcategoria: 1,
        idmarca: 1,
        nombre: 'Papas',
        entradas: 0,
        salidas: 0,
        stock: 56,
        unidadmedida: 'libras',
        preciocompra: 9.00,
        precioventa: 32.00,
        precioventamayor: 14.00,
        servicio: false,
        estado: true,
        descripcion: 'Sin descripción'
      }
    ]
  }

  edit(producto) {
    console.log(producto);

  }

  delete(id) {
    console.log('Elemento ' + id + ' eliminado');
  }
}
