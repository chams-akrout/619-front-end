import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../services/login-auth.service';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogueBodyEditCatComponent } from '../EDIT/dialogue-body-edit-cat/dialogue-body-edit-cat.component';
import { ProductService } from '../services/porduct.service';
import { Product } from '../models/product';
import { DialogueBodyEditProductComponent } from '../EDIT/dialogue-body-edit-product/dialogue-body-edit-product.component';

@Component({
  selector: 'app-list-prod',
  templateUrl: './list-prod.component.html',
  styleUrls: ['./list-prod.component.css']
})
export class ListProdComponent implements OnInit {
  public loginUser:any={};
  public products:Product[];
  constructor(private loginAuthService: LoginAuthService,private prodService: ProductService, private router: Router, public dialog: MatDialog) {
    this.loginAuthService.isLoggedIn();
    this.loginUser=JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit(): void {
    this.listProd();
  }




    listProd = () =>
    this.prodService.getAllProds().subscribe(res => {
      this.products = res
    console.log(res);
    });


    deleteProd(prodId) {
      //console.log(this.loginUser.token);
    this.prodService.deleteprod(prodId,this.loginUser.token).subscribe(data=>{
      console.log("success");

 });
 this.router.navigate(['/home/admin']);
  }
  openDialogEditProd(id,name,factory,image,category): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {name:name,id:id,factory:factory,image:image,category:category} ;
    dialogConfig.width = "300px";
    let dialogRef = this.dialog.open(DialogueBodyEditProductComponent, dialogConfig);

  }

}
