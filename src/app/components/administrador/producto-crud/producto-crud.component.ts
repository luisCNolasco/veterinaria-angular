import { Component, OnInit } from '@angular/core';
import { ProductoCrudService } from '../../../services/producto-crud.service';

@Component({
  selector: 'app-producto-crud',
  templateUrl: './producto-crud.component.html',
  styleUrls: ['./producto-crud.component.css']
})
export class ProductoCrudComponent implements OnInit {
private img:any;
  constructor( private servicioProducto:ProductoCrudService) { }

  ngOnInit(): void {
  }

  crearProducto(){
    this.servicioProducto.uploadImage(this.img);
  }

  imagenEscogida(event){
    this.img = event.target.files[0];
  }

}
