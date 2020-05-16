import { Observable } from 'rxjs';
import { ApiConnectionService } from './../admin/api-connection.service';
import { CategoriaInterface } from './../../modelos/categoria';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  public categoriaSelected: CategoriaInterface = { id: null, nombre: null };
  constructor(private httpClient: HttpClient, private apiConnection: ApiConnectionService) { }

  all(): Observable<any> {
    return this.httpClient.get(this.apiConnection.connection + "categorias");
  }
  add(categoria: CategoriaInterface) {
    return this.httpClient.post(this.apiConnection.connection + "categorias", categoria);
  }
  show(id: number): Observable<any> {
    return this.httpClient.get(this.apiConnection.connection + "categorias/" + id);
  }
  update(categoria: CategoriaInterface, id: number) {
    let json = JSON.stringify(categoria);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(this.apiConnection.connection + "categorias", json, { headers: headers });
  }
  destroy(id:number) { 
    return this.httpClient.delete(this.apiConnection.connection+"categorias/"+id);
  }
}
