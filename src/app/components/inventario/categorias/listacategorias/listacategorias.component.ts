import { CategoriaService } from './../../../../servicios/inventario/categoria.service';
import { CategoriaInterface } from './../../../../modelos/categoria';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listacategorias',
  templateUrl: './listacategorias.component.html',
  styleUrls: ['./listacategorias.component.css']
})
export class ListacategoriasComponent implements OnInit {
  @Output() openForm = new EventEmitter;
  categorias: CategoriaInterface[];
  constructor(private categoriaService: CategoriaService) { }

  ngOnInit() {
    this.categorias = [
      {
        id: 1,
        nombre: 'Granos'
      },
      {
        id: 2,
        nombre: 'Embutidos'
      },
      {
        id: 3,
        nombre: 'Enlatados'
      }
    ]
  }

  edit(cat) {
    console.log(cat);
    this.categoriaService.categoriaSelected = cat;
    this.openForm.emit();
  }
  delete(id) {
    console.log(id);

  }

}
