import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeConsommateurComponent } from './home-consommateur/home-consommateur.component';
import { RegisterComponent } from './register/register.component';
import {AuthGuard} from './auth.guard';
import { ListProdComponent } from './list-prod/list-prod.component';
import { ListCatComponent } from './list-cat/list-cat.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'register',
    component: RegisterComponent,
    pathMatch: 'full'
  },
  {
    path: 'home/admin',
    component: HomeAdminComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ListProdComponent,
    pathMatch: 'full'
  },
  {
    path: 'categories',
    component: ListCatComponent,
    pathMatch: 'full'
  },
  {
    path: 'home/consommateur',
    component: HomeConsommateurComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
