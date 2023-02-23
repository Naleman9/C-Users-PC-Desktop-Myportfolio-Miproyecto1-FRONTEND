import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
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
