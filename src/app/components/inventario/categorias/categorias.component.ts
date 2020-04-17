import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  mostrarForm: boolean = false;
  public refresh: boolean = false;
  constructor(private messageService: MessageService) { }

  ngOnInit() {

  }

  openForm(e) {
    this.mostrarForm = true;
    this.refresh = !this.refresh;
  }

  closeForm(e) {
    this.mostrarForm = false;
    console.log(e);
    if (e) {
      this.messageService.add({ severity: 'success', detail: e + ' 👍' });
    }
  }

}
