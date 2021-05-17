import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

/*Firebase */
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireModule } from '@angular/fire';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { ProductoComponent } from './components/producto/producto.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { ProductoCrudComponent } from './components/administrador/producto-crud/producto-crud.component';
import { MascotaCrudComponent } from './components/cliente/mascota-crud/mascota-crud.component';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    AdministradorComponent,
    ProductoComponent,
    LoginComponent,
    NavbarComponent,
    FooterComponent,
    RegistrarseComponent,
    ProductoCrudComponent,
    MascotaCrudComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule

  ],
  providers: [
    //{provide:StorageBucket,useValue:'gs://veterinaria-imgs.appspot.com'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
