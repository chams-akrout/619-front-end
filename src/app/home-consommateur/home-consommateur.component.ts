import { Component, OnInit, ɵConsole } from "@angular/core";
import { LoginAuthService } from "../services/login-auth.service";
import { Router } from "@angular/router";
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserService } from "../services/user.service";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ListLocalProductsComponent } from '../list-local-products/list-local-products.component';

@Component({
  selector: "app-home-consommateur",
  templateUrl: "./home-consommateur.component.html",
  styleUrls: ["./home-consommateur.component.css"],
})
export class HomeConsommateurComponent implements OnInit {
  public loginUser: any = {};
  public user: any = {};
  barcodeForm: FormGroup;
  isShown: boolean = false ;
  constructor(
    private formBuilder: FormBuilder,
    private loginAuthService: LoginAuthService,
    private router: Router,
    private userService: UserService,
    public dialog: MatDialog
  ) {
    this.loginAuthService.isLoggedIn();
    this.loginUser = JSON.parse(localStorage.getItem("currentUser"));

    this.barcodeForm = this.formBuilder.group({
      barcode: ["", [Validators.required]],
    });
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigate([""]);
  }
  ngOnInit(): void {
    this.userService.getUser(this.loginUser.token).subscribe((user) => {
      this.user = user;
    });

  }
  navigateToScan(){
    this.router.navigate(['/home/consommateur/scanBarcode'])
  }

  listProd(value) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {barcode:value} ;
    dialogConfig.width = "400px";
    let dialogRef = this.dialog.open(ListLocalProductsComponent, dialogConfig);
  }
}
