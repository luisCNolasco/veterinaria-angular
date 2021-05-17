import { Component, OnInit } from '@angular/core';
import { Cliente } from './models/Cliente';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'appVeterinaria';
  cliente:Cliente;

  constructor(){

  }
  ngOnInit(): void {
  
  }
 
}
