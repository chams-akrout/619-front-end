import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { ProductService } from "../services/porduct.service";
import { throwError } from "rxjs";
@Component({
  selector: "app-list-local-products",
  templateUrl: "./list-local-products.component.html",
  styleUrls: ["./list-local-products.component.css"],
})
export class ListLocalProductsComponent implements OnInit {
  public localProducts;
  constructor(
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ListLocalProductsComponent>,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.data.barcode);
    console.log(typeof this.data.barcode);
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
}
