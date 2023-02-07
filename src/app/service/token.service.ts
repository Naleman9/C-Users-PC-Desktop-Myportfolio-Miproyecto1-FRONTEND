import { Injectable } from '@angular/core';

const TOKEN_KEY = "Authtoken"
const USERNAME_KEY = "AuthUsername"
const AUTHORITIES_KEY = "AuthAuthorities"
@Injectable({
  providedIn: 'root'
})
export class TokenService {
Roles: Array<string> = [];
  constructor() { }
  public setToken(token: string): void {
    window.sessionStorage.removeItem(TOKEN_KEY)
    window.sessionStorage.setItem(TOKEN_KEY, token)
}
  public getToken(): string {
  return sessionStorage.getItem(TOKEN_KEY)!;
}
  public setUsername(username: string): void {
  window.sessionStorage.removeItem(USERNAME_KEY)
    window.sessionStorage.setItem(USERNAME_KEY, username);
}
public getUsername(): string {
  return sessionStorage.getItem(USERNAME_KEY)!;
}
public setAuthorities(authorities: string[]): void {
  window.sessionStorage.removeItem(AUTHORITIES_KEY)
  window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
    }

public getAuthorities(): string[]{
  this.Roles = [];
  if (sessionStorage.getItem(AUTHORITIES_KEY)){
  JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach((authority:any) => {
    this.Roles.push(authority.authority);
  });
}
  return this.Roles;
}
public logout(): void {
  window.sessionStorage.clear();
}
}

