import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { environment } from "../environments/environment";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularMaterialModule } from "./models/angular-material/angular-material.module";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { HomeAdminComponent } from "./home-admin/home-admin.component";
import { HomeConsommateurComponent } from "./home-consommateur/home-consommateur.component";
import { RegisterComponent } from "./register/register.component";
import { AuthGuard } from "./auth.guard";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule, MatListModule} from "@angular/material";
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { DialogueBodyAddCatComponent } from "./ADD/dialogue-body-add-cat/dialogue-body-add-cat.component";
import { DialogueBodyAddProductComponent } from "./ADD/dialogue-body-add-product/dialogue-body-add-product.component";
import { ListCatComponent } from "./list-cat/list-cat.component";
import { ListProdComponent } from "./list-prod/list-prod.component";
import { DialogueBodyEditCatComponent } from "./EDIT/dialogue-body-edit-cat/dialogue-body-edit-cat.component";
import { DialogueBodyEditProductComponent } from "./EDIT/dialogue-body-edit-product/dialogue-body-edit-product.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeAdminComponent,
    HomeConsommateurComponent,
    RegisterComponent,
    DialogueBodyAddCatComponent,
    DialogueBodyAddProductComponent,
    DialogueBodyEditCatComponent,
    DialogueBodyEditProductComponent,
    ListCatComponent,
    ListProdComponent
  ],
  entryComponents: [
    DialogueBodyEditCatComponent,
    DialogueBodyAddProductComponent,
    DialogueBodyEditProductComponent,
    DialogueBodyAddCatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    MatDialogModule,
    MatExpansionModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    ReactiveFormsModule,
    MatMenuModule
  ],
  exports: [MatListModule],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
