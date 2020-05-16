import { ProductoService } from './../../../../servicios/inventario/producto.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductoInterface } from 'src/app/modelos/producto';

@Component({
  selector: 'app-listaproductos',
  templateUrl: './listaproductos.component.html',
  styleUrls: ['./listaproductos.component.css']
})
export class ListaproductosComponent implements OnInit {

  @Output() openForm = new EventEmitter;

  productos: ProductoInterface[];

  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.all();
  }

  all() {
    this.productoService.all().subscribe(data => {
      this.productos = data;
    }
    );
  }

  edit(producto) {
    console.log(producto);
    this.openForm.emit('Evento activado desde listaproductos');
    this.productoService.productoSelect = producto;
  }

  delete(id) {
    console.log('Elemento ' + id + ' eliminado');
  }
}
