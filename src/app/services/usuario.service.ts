import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  gmail: string;
  password: string;
  usuario: Usuario;

  autenticado: boolean;
  
  constructor(private http: HttpClient) {
    this.estaAutenticado();
  }

  URL: string = 'http://localhost:8090/usuario';

  iniciarSesion(gmail: string, password) {
    return this.http
      .get<Usuario>(this.URL + '/iniciarSesion/' + gmail + '/' + password)
      .pipe(
        map((resp) => {
          this.autenticado = true;
          return resp;
        })
      );
  }

  estaAutenticado(): boolean {
    if (this.autenticado) {
      return true;
    }
  }

}
