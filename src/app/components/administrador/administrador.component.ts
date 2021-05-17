import { Component, OnInit } from '@angular/core';
import { EmpleadoService } from '../../services/empleado.service';
import { Empleado } from '../../models/Empleado';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css'],
})
export class AdministradorComponent implements OnInit {
  empleado: Empleado;
  constructor(private serviceEmpleado: EmpleadoService) {
    this.empleado = this.serviceEmpleado.getCurrentUser();
    console.log(this.empleado)
  }

  ngOnInit(): void {}
}
