import { MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  mostrarForm: boolean = false;
  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  abrirForm(e) {
    this.mostrarForm = true;
  }
  cerrarForm(e) {
    this.mostrarForm = false;
    this.mostrarMensaje(e);
  }

  mostrarMensaje(mensaje) {
    this.messageService.add({ severity: 'info', summary: mensaje, detail: '' });
  }

}
