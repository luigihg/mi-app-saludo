import { Component, OnInit } from '@angular/core';
import { SaludoService } from './saludo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  saludo: string = '';

  constructor(private saludoService: SaludoService) { }

  ngOnInit() {
    this.saludoService.obtenerSaludo().subscribe(
      (data) => {
        this.saludo = data.mensaje; // Ajusta "mensaje" según la respuesta de tu servicio
      },
      (error) => {
        console.error('Error al obtener el saludo:', error);
        this.saludo = 'Error al obtener el saludo';
      }
    );
  }
}
