import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { ListaUsuariosComponent } from './components/lista-usuarios/lista-usuarios.component';
import { LoginComponent } from './components/login/login.component';
import { PrivateComponent } from './components/private/private.component';
import { Guard1Guard } from './guards/guard1.guard';
import { RoleGuard } from './guards/role.guard';

const routes: Routes = [
  { path: 'home', component:HomeComponent },
  { path: 'private', component:PrivateComponent, canActivate: [Guard1Guard] },
  { path: 'admin', component:AdminComponent, canActivate:[Guard1Guard] ,data: {expectedRole: 'admin'} },
  { path: 'login', component:LoginComponent},
  { path: 'usuarios', component:ListaUsuariosComponent},
  { path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
