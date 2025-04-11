import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { Observable, tap } from "rxjs";

@Injectable({
  providedIn:'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/usuarios';
  constructor(
    private http: HttpClient,
    private router: Router
  ){}

  login(credentials: {email: string, senha: string}): Observable<any> {
    return this.http.post('http://localhost:8080/usuarios/login', credentials).pipe(
      tap((res) => {
        localStorage.setItem('usuario',JSON.stringify(res));
      })
    );
  }
  logout(): void {
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('usuario') !== null;
  }

  getUsuario(): any{
    const usuario = localStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
  }
}
