import { Component,  Output, EventEmitter } from '@angular/core';
import { Alumnos } from 'src/app/modelo/alumno';
import { Seccion } from 'src/app/modelo/seccion';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent {
  public alumno:Alumnos={
    rut:0,// input type number
    nombre:'', // type text
    apellido:'', // type text
    edad:0, // input type number
    seccion:'' // type text
  }
  @Output() public guardarAlumno = new EventEmitter<Alumnos>();
  public guardarElemento(){
    // copia de un objeto de un nivel
    const copia: Alumnos = {
      ...this.alumno
    }
    this.guardarAlumno.emit(copia);
  }

  public cRut(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.alumno.rut = Number.parseInt(ele.value) || 0;
  }
  public cNombre(evento: Event): void{
    const ele = evento.target as HTMLInputElement;
    this.alumno.nombre = ele.value;
}
public cApellido(evento: Event): void{
  const ele = evento.target as HTMLInputElement;
  this.alumno.apellido = ele.value;
}
public cEdad(evento: Event): void{
  const ele = evento.target as HTMLInputElement;
  this.alumno.edad = Number.parseInt(ele.value) || 0;
}
public cSeccion(evento: Event): void{
  const ele = evento.target as HTMLInputElement;
  this.alumno.seccion = ele.value;
}
}
