import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InscrireComponent } from './components/inscrire/inscrire.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeConsommateurComponent } from './home-consommateur/home-consommateur.component';


const routes: Routes = [
  {
    path: '',
    component: InscrireComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'home/admin',
    component: HomeAdminComponent,
    pathMatch: 'full'
  },
  {
    path: 'home/consommateur',
    component: HomeConsommateurComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
