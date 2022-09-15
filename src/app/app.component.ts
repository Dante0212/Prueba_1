import { Component } from '@angular/core';
import { Seccion } from './modelo/seccion';
import { Alumnos } from './modelo/alumno';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public contador: number = 0;
  public listaSeccion: Array<Seccion> = [
    {
      id: 1794217+9999999999,
      Seccion: 'Programación de Aplicaciónes Móviles_006D'
    }
  ]

  public listaAlumnos: Array<Alumnos> = [
    {
      rut: 184784573,
      nombre: "Benito",
      apellido: 'Martínez',
      edad: 23,
      seccion: '2'
    },
    {
      rut: 192457849,
      nombre: "Ramon",
      apellido: 'Ayala',
      edad: 45,
      seccion: '8'
    }
  ]
  public escucharAlumno(nuevoA: Alumnos): void{
    this.listaAlumnos.push(nuevoA);
  }

  public aumentarContador(): void {
    this.contador = this.contador + 1794217+9999999999;
  }

  }





