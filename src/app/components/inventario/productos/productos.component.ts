import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  mostrarForm: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  openForm() {
    this.mostrarForm = true;
  }

}
