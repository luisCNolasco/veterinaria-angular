import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { Imagen } from '../models/Imagen';
import { map, finalize } from 'rxjs/operators';
import { Producto } from '../models/Producto';


@Injectable({
  providedIn: 'root'
})
export class ProductoCrudService {
 
  private filePath: any;
 
  private downloadURL: Observable<string>;
  
  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) { }


//post: PostI
    public uploadImage(image:Imagen) {
      this.filePath = `productos/${image.name}`;
      const fileRef = this.storage.ref(this.filePath);
      const task = this.storage.upload(this.filePath, image);
      task.snapshotChanges()
        .pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe(urlImage => {
              this.downloadURL = urlImage;
              console.log(this.downloadURL);
            });
          })
        ).subscribe();
    }

    registrarProducto(producto:Producto){

    }
}
