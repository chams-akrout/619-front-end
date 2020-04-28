import { Component, OnInit, Inject } from "@angular/core";
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatDialogConfig,
  MatDialog,
} from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ProductService } from "../services/porduct.service";
import { throwError } from "rxjs";
import { WelcomeDialogComponent } from "../welcome-dialog/welcome-dialog.component";
import { LoginAuthService } from "../services/login-auth.service";
import { UserService } from "../services/user.service";
import { BonusDialogueComponent } from "../bonus-dialogue/bonus-dialogue.component";
@Component({
  selector: "app-list-local-products",
  templateUrl: "./list-local-products.component.html",
  styleUrls: ["./list-local-products.component.css"],
})
export class ListLocalProductsComponent implements OnInit {
  public localProducts;
  public loginUser: any = {};
  constructor(
    private loginAuthService: LoginAuthService,
    private userService: UserService,
    public dialog: MatDialog,
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ListLocalProductsComponent>,
    private router: Router
  ) {
    this.loginAuthService.isLoggedIn();
    this.loginUser = JSON.parse(localStorage.getItem("currentUser"));
  }

  ngOnInit(): void {
    switch (typeof this.data.barcode) {
      case "object":
        this.productService.getLocalProducts(this.data.barcode).subscribe(
          (res) => (this.localProducts = res),
          (error) => {
            console.log("Error");
            return throwError(error);
          }
        );
        break;
      case "string":
        this.productService
          .getLocalProductsByString(this.data.barcode)
          .subscribe(
            (res) => (this.localProducts = res),
            (error) => {
              console.log("Error");
              return throwError(error);
            }
          );
    }
  }
  close() {
    this.dialogRef.close("Modification annulée");
  }

  addScore(prod) {
    this.productService.updateProdAddScore(prod).subscribe(
      (data) => {
        return true;
      },
      (error) => {
        console.log("Error");
        return throwError(error);
      }
    );
    this.userService.updateUserScore(this.loginUser.user).subscribe(
      (resp) => {
        this.loginUser.user = resp;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = {
          name: resp.name,
          score: resp.score,
        };
        dialogConfig.width = "400px";
        let dialogRef = this.dialog.open(BonusDialogueComponent, dialogConfig);
        return true;
      },
      (error) => {
        console.log("Error");
        return throwError(error);
      }
    );
  }

  substractScore(prod) {
    this.productService.updateProdSubstractScore(prod).subscribe(
      (data) => {
        return true;
      },
      (error) => {
        console.log("Error");
        return throwError(error);
      }
    );
    this.userService.updateUserScore(this.loginUser.user).subscribe(
      (resp) => {
        this.loginUser.user = resp;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.data = {
          name: resp.name,
          score: resp.score,
        };
        dialogConfig.width = "400px";
        let dialogRef = this.dialog.open(BonusDialogueComponent, dialogConfig);
        return true;
      },
      (error) => {
        console.log("Error");
        return throwError(error);
      }
    );
  }
}
