import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductoComponent } from './components/producto/producto.component';
import { LoginComponent } from './components/login/login.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { RegistrarseComponent } from './components/registrarse/registrarse.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'producto',component:ProductoComponent},
  {path:'login',component:LoginComponent},
  {path:'cliente',component:ClienteComponent},//,canActivate:[AuthGuard]
  {path:'administrador',component:AdministradorComponent},//,canActivate:[AuthGuard]
  {path:'registrarse',component:RegistrarseComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
