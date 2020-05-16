import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiConnectionService {

  constructor() { }
public connection="/appBackend2/public/api/"; //TO-DO Reemplazar con el proxy al momento de producción
   // public connection="http://localhost:80/appBackend2/public/api/";
}
