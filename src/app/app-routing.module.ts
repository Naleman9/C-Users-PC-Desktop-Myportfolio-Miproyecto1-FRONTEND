import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { EditExperienciaComponent } from './edit-experiencia/edit-experiencia.component';
import { EditeducacionComponent } from './editeducacion/editeducacion.component';
import { NewExperienciaComponent } from './new-experiencia/new-experiencia.component';
import { NeweducacionComponent } from './neweducacion/neweducacion.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'login',component: LoginComponent},
  { path: 'nuevaexp',component: NewExperienciaComponent},
  { path: 'editexp/:id',component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
