import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { LogrosComponent } from './components/logros/logros.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { NewExperienciaComponent } from './components/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/edit-experiencia/edit-experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NeweducacionComponent } from './components/neweducacion/neweducacion.component';
import { EditeducacionComponent } from './components/editeducacion/editeducacion.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { NewSkillComponent } from './components/new-skill/new-skill.component';


=======
import { NewExperienciaComponent } from './new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './edit-experiencia/edit-experiencia.component';
import { EducacionComponent } from './educacion/educacion.component';
import { NeweducacionComponent } from './neweducacion/neweducacion.component';
import { EditeducacionComponent } from './editeducacion/editeducacion.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
>>>>>>> 551334bc383bfaf4e18a228194208f024dd42e06


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    EncabezadoComponent,
    AcercaDeComponent,
    LogrosComponent,
    HabilidadesComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    EducacionComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    ExperienciaComponent,
<<<<<<< HEAD
    EditSkillComponent,
    NewSkillComponent,
    
=======
    
  
>>>>>>> 551334bc383bfaf4e18a228194208f024dd42e06
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    
=======
    NgCircleProgressModule.forRoot({})
    HttpClientModule,
    FormsModule,
>>>>>>> 551334bc383bfaf4e18a228194208f024dd42e06
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
