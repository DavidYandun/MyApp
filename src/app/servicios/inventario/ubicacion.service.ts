import { UbicacionInterface } from './../../modelos/ubicacion';
import { Observable } from 'rxjs';
import { ApiConnectionService } from './../admin/api-connection.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UbicacionService {

  constructor(private httpClient:HttpClient, private apiConnection:ApiConnectionService) { }

  all(): Observable<any> {
    return this.httpClient.get(this.apiConnection.connection + "ubicaciones");
  }
  add(ubicacion: UbicacionInterface) {
    return this.httpClient.post(this.apiConnection.connection + "ubicaciones", ubicacion);
  }
  show(id: number): Observable<any> {
    return this.httpClient.get(this.apiConnection.connection + "ubicaciones/" + id);
  }
  update(ubicacion: UbicacionInterface, id: number) {
    let json = JSON.stringify(ubicacion);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(this.apiConnection.connection + "ubicaciones", json, { headers: headers });
  }
  destroy(id:number) { 
    return this.httpClient.delete(this.apiConnection.connection+"ubicaciones/"+id);
  }
}
