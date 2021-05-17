import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/Usuario';
import { ClienteService } from '../../services/cliente.service';
import { stringify } from '@angular/compiler/src/util';
import { Cliente } from '../../models/Cliente';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  usuario: string;
  password: string;
  usuarioObtenido: Usuario;

  cliente: Cliente;

  constructor(
    private router: Router,
    private serviceUsuario: UsuarioService,
    private serviceCliente: ClienteService,
    private servicioEmpleado: EmpleadoService
  ) {}

  registrarse(): void {
    this.router.navigate(['registrarse']);
  }

  iniciarSesion() {
    this.serviceUsuario
      .iniciarSesion(this.usuario, this.password)
      .subscribe((data) => {
        this.usuarioObtenido = data;

        if (this.usuarioObtenido.tipoUsuario.codigo == 1) {
          this.sesionCliente(
            this.usuarioObtenido.correo,
            this.usuarioObtenido.password
          );
        }
        if (this.usuarioObtenido.tipoUsuario.codigo == 2) {
          this.sesionEmpleado(
            this.usuarioObtenido.correo,
            this.usuarioObtenido.password
          );
        }
      });
  }
  sesionCliente(gmail: string, pass: string) {
     this.serviceCliente.iniciarSesion(gmail, pass).subscribe((data) => {
      this.cliente = data;
      this.serviceCliente.setUser(this.cliente);
    });
    this.router.navigateByUrl('/cliente');
  }

  sesionEmpleado(gmail: string, pass: string) {
    this.servicioEmpleado.iniciarSesion(gmail, pass).subscribe((data) => {});
    this.router.navigate(['administrador']);
  }
}
