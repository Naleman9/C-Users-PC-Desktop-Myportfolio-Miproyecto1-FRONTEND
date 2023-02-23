import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
<<<<<<< HEAD
import { environment } from 'src/environments/environment';
=======
>>>>>>> 551334bc383bfaf4e18a228194208f024dd42e06
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
<<<<<<< HEAD
URL = environment.URL + 'auth/';

  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'nuevo',nuevoUsuario);
}
public login(loginUsuario: LoginUsuario): Observable<any>{
  return this.httpClient.post<JwtDto>(this.URL + 'login',loginUsuario);
=======
authURL='http://localhost:8080/auth/';
  constructor(private httpClient:HttpClient) { }

  public nuevo(nuevoUsuario:NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo',nuevoUsuario);
}
public login(loginUsuario: LoginUsuario): Observable<any>{
  return this.httpClient.post<JwtDto>(this.authURL + 'login',loginUsuario);
>>>>>>> 551334bc383bfaf4e18a228194208f024dd42e06
}
}