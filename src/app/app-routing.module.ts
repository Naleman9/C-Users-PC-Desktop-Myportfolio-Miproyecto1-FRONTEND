import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/edit-acerca-de/edit-acerca-de.component';
import { EditExperienciaComponent } from './components/edit-experiencia/edit-experiencia.component';
import { EditSkillComponent } from './components/edit-skill/edit-skill.component';
import { EditeducacionComponent } from './components/editeducacion/editeducacion.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/new-experiencia/new-experiencia.component';
import { NewSkillComponent } from './components/new-skill/new-skill.component';
import { NeweducacionComponent } from './components/neweducacion/neweducacion.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'login',component: LoginComponent},
  { path: 'nuevaexp',component: NewExperienciaComponent},
  { path: 'editexp/:id',component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'editskill/:id', component:EditSkillComponent},
  { path: 'newskill', component:NewSkillComponent},
  { path: 'editacercade/:id', component:EditAcercaDeComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
