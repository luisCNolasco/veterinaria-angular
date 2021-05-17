import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../models/Cliente';
import { isNull } from '@angular/compiler/src/output/output_ast';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  URL: string = 'http://localhost:8090/cliente';
  constructor(private http: HttpClient) {}

  registrarCliente(cliente: Cliente) {
    return this.http.post<Cliente>(this.URL, cliente);
  }

  iniciarSesion(gmail: string, password) {
    return this.http.get<Cliente>(
      this.URL + '/buscarXCorreoContrasena/' + gmail + '/' + password
    );
  }

  setUser(cliente: Cliente): void {
    let cliente_string = JSON.stringify(cliente);
    localStorage.setItem('currentUser', cliente_string);
  }

  getCurrentUser(): Cliente {
    let user_string = localStorage.getItem('currentUser');
    let user: Cliente = JSON.parse(user_string);
    return user;
  }

  logoutUser() {
    //let accessToken = localStorage.getItem("accessToken");
    // const url_api = `http://localhost:3000/api/Users/logout?access_token=${accessToken}`;
    //localStorage.removeItem("accessToken");
    localStorage.removeItem('currentUser');
    //return this.htttp.post<UserInterface>(url_api, { headers: this.headers });
  }
  // setToken(token): void {
  //   localStorage.setItem("accessToken", token);
  // }

  // getToken() {
  //   return localStorage.getItem("accessToken");
  // }
}
