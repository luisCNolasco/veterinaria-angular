import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Cliente } from '../../models/Cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css'],
})
export class ClienteComponent implements OnInit {
  cliente: Cliente;

  constructor(private router: Router, private serviceCliente: ClienteService) {
    this.cliente = this.serviceCliente.getCurrentUser();
    console.log(this.cliente);
  }

  ngOnInit(): void {}

  salir() {
    this.serviceCliente.logoutUser();
    this.router.navigateByUrl('/home');
  }
}
