import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MostrarAlumnoComponent } from './componente/mostrar-alumno/mostrar-alumno.component';
import { ListarAlumnoComponent } from './componente/listar-alumno/listar-alumno.component';
import { AlumnosComponent } from './componente/alumnos/alumnos.component';
import { SeccionComponent } from './componente/seccion/seccion.component';
import { ListarSeccionComponent } from './componente/listar-seccion/listar-seccion.component';
import { FormularioComponent } from './componente/formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MostrarAlumnoComponent,
    ListarAlumnoComponent,
    AlumnosComponent,
    SeccionComponent,
    ListarSeccionComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
