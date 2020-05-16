import { MarcaInterface } from './../../modelos/marca';

import { ApiConnectionService } from './../admin/api-connection.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MarcaService {

  constructor(private httpClient: HttpClient, private apiConnection: ApiConnectionService) { }

  all(): Observable<any>{
  return  this.httpClient.get(this.apiConnection.connection + "marcas");
  }
  add(marca: MarcaInterface) {
    return this.httpClient.post(this.apiConnection.connection + "marcas", marca);
  }
  show(id: number): Observable<any> {
    return this.httpClient.get(this.apiConnection.connection + "marcas/" + id);
  }
  update(marca: MarcaInterface, id: number) {
    let json = JSON.stringify(marca);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(this.apiConnection.connection + "marcas", json, { headers: headers });
  }
  destroy(id: number) {
    return this.httpClient.delete(this.apiConnection.connection + "marcas/" + id);
  }
}
