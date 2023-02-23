import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { environment } from 'src/environments/environment';
=======
>>>>>>> 551334bc383bfaf4e18a228194208f024dd42e06
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
<<<<<<< HEAD
  get() {
    throw new Error('Method not implemented.');
  }
  URL = environment.URL + 'personas/';

  constructor(private httpClient: HttpClient) { }
  
  public lista(): Observable<PersonaService[]>{
    return this.httpClient.get<PersonaService[]>(this.URL + 'lista');
}
    
public detail(id: number): Observable<PersonaService>{
    return this.httpClient.get<PersonaService>(this.URL + `detail/${id}`);
} 
public update(id: number, Persona: persona): Observable<any>{
  return this.httpClient.put<any>(this.URL + `update/${id}`, Persona);
}
}
=======
 URL = 'http://localhost:8080/persona/';
  constructor(private http: HttpClient) { }
  
  public getPersona(): Observable<persona> {
  return this.http.get<persona>(this.URL+'traer/perfil');
}
 }
>>>>>>> 551334bc383bfaf4e18a228194208f024dd42e06
