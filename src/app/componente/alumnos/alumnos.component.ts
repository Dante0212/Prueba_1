import { Component, Input } from '@angular/core';
import { Alumnos } from 'src/app/modelo/alumno';


@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss']
})
export class AlumnosComponent  {
  @Input() public alumno!: Alumnos;
}
