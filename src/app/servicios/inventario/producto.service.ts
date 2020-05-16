import { ApiConnectionService } from './../admin/api-connection.service';
import { Injectable } from '@angular/core';
import { ProductoInterface } from 'src/app/modelos/producto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(private httpClient: HttpClient, private apiConnection: ApiConnectionService) { }
  public productoSelect: ProductoInterface = {
    id: null,
    codigo: null,
    idubicacion: null,
    idcategoria: null,
    idmarca: null,
    nombre: null,
    entradas: 0,
    salidas: 0,
    stock: null,
    unidadmedida: null,
    preciocompra: null,
    precioventa: null,
    precioventamayor: null,
    servicio: false,
    estado: true,
    descripcion: null,
  }

  all(): Observable<any> {
    return this.httpClient.get(this.apiConnection.connection + 'productos');
  }

  add(producto: ProductoInterface) {
    return this.httpClient.post(this.apiConnection.connection + 'productos', producto);
  }

  show(id: number): Observable<any> {
    return this.httpClient.get(this.apiConnection.connection + 'productos/');
  }

  update(producto: ProductoInterface, id: number) {
    let json = JSON.stringify(producto);
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.httpClient.put(this.apiConnection.connection + 'productos/' + id, json, { headers: headers });
  }

  destroy(id: number) {
    return this.httpClient.delete(this.apiConnection.connection + 'productos/' + id);
  }

}
