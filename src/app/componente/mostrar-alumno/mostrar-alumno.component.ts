import { Component, Input } from '@angular/core';
import { Alumnos } from '.././../modelo/alumno';

@Component({
  selector: 'app-mostrar-alumno',
  templateUrl: './mostrar-alumno.component.html',
  styleUrls: ['./mostrar-alumno.component.scss']
})
export class MostrarAlumnoComponent  {

  @Input() public alumno!:Alumnos;

}
