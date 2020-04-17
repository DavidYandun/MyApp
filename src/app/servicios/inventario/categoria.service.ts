import { CategoriaInterface } from './../../modelos/categoria';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  public categoriaSelected: CategoriaInterface = { id: null, nombre: null };
  constructor() { }

  all() { }
  add() { }
  show() { }
  update() { }
  destroy() { }
}
