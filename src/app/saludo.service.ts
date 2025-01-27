import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaludoService {
  private apiUrl = 'http://localhost:8080/servicio-saludo-0.0.1-SNAPSHOT/saludo'; // Reemplaza con la URL de tu servicio

  constructor(private http: HttpClient) { }

  obtenerSaludo(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
