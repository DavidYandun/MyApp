import { MessageService } from 'primeng/api';
import { CategoriaService } from './../../../../servicios/inventario/categoria.service';
import { CategoriaInterface } from './../../../../modelos/categoria';
import { Component, OnInit, Output, EventEmitter, OnChanges, SimpleChanges, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-formcategoria',
  templateUrl: './formcategoria.component.html',
  styleUrls: ['./formcategoria.component.css']
})
export class FormcategoriaComponent implements OnChanges {
  @Output() closeForm = new EventEmitter;
  @Input() refresh;
  public Form = new FormGroup({
    id: new FormControl(null),
    nombre: new FormControl('', [Validators.required])
  });
  constructor(private categoriaService: CategoriaService, private messageService:MessageService) { }

  ngOnChanges(changes: SimpleChanges) {
    this.initValuesForm();
  }

  enviarForm(categoria: CategoriaInterface) {
    if (!this.Form.value.id) {
      //TO-DO
      this.closeForm.emit(categoria.nombre + ' - AGREGADO CORRECTAMENTE');
    } else {
      //TO-DO
      this.closeForm.emit(categoria.nombre + ' - MODIFICADO CORRECTAMENTE')
    }
    this.onResetForm();
  }

  private initValuesForm(): void {
    this.Form.patchValue({
      id: this.categoriaService.categoriaSelected.id,
      nombre: this.categoriaService.categoriaSelected.nombre
    })
  }
  onResetForm() {
    this.Form.patchValue({
      id: null,
      nombre: '',
    })
  }
  cancelar() {
    this.closeForm.emit();
    this.onResetForm();
  }

  get nombre() { return this.Form.get('nombre') };
}
