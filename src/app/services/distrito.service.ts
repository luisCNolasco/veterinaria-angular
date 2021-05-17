import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Distrito } from '../models/Distrito';

@Injectable({
  providedIn: 'root'
})
export class DistritoService {

  URL:string = "http://localhost:8090/distrito"
  constructor(private http:HttpClient) { }

  getDistritos(){
    return this.http.get<Distrito[]>(this.URL);
   }
}
