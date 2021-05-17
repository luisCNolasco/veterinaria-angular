import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Empleado } from '../models/Empleado';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  URL: string = 'http://localhost:8090/empleado';
  constructor(private http: HttpClient) {}

  iniciarSesion(gmail: string, password: string) {
    return this.http.get<Empleado>(
      this.URL + '/buscarXCorreoContrasena/' + gmail + '/' + password
    );
  }

  setUser(empleado: Empleado): void {
    let cliente_string = JSON.stringify(empleado);
    localStorage.setItem('currentUser', cliente_string);
  }

  getCurrentUser(): Empleado {
    let user_string = localStorage.getItem('currentUser');

    let user: Empleado = JSON.parse(user_string);
    return user;
  }

  logoutUser() {
    //let accessToken = localStorage.getItem("accessToken");
    // const url_api = `http://localhost:3000/api/Users/logout?access_token=${accessToken}`;
    //localStorage.removeItem("accessToken");
    localStorage.removeItem('currentUser');
    //return this.htttp.post<UserInterface>(url_api, { headers: this.headers });
  }
}
