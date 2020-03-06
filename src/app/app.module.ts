import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InscrireComponent } from './components/inscrire/inscrire.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './models/angular-material/angular-material.module';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { HomeConsommateurComponent } from './home-consommateur/home-consommateur.component';
@NgModule({
  declarations: [
    AppComponent,
    InscrireComponent,
    LoginComponent,
    HomeAdminComponent,
    HomeConsommateurComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule

    
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
