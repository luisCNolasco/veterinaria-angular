import { Component, OnInit } from '@angular/core';
import { DistritoService } from '../../services/distrito.service';
import { Distrito } from '../../models/Distrito';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css'],
})
export class RegistrarseComponent implements OnInit {
  distritos: Distrito[];
  cliente:Cliente = new Cliente();
  lista:string[]=["Masculino","Femenino"];

  usuarios:any[];
  constructor(private serviceDistrito: DistritoService,
              private servicioCliente:ClienteService) {}

  ngOnInit(): void {
    this.obtenerDistritos();
 
  }

  obtenerDistritos() {
    this.serviceDistrito.getDistritos().subscribe((data) => {
      this.distritos = data;
    });
  }

  registrar(){
    this.servicioCliente.registrarCliente(this.cliente).subscribe(data =>{
      
    });
    this.cliente=new Cliente();
  }

 
}
