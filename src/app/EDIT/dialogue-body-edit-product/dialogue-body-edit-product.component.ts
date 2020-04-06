import { Component, OnInit, Inject } from '@angular/core';
import { Product } from 'src/app/models/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/porduct.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-dialogue-body-edit-product',
  templateUrl: './dialogue-body-edit-product.component.html',
  styleUrls: ['./dialogue-body-edit-product.component.css']
})
export class DialogueBodyEditProductComponent implements OnInit {

  public categories;
  product:Product={};
  public loginUser:any={};
  editProdForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private productService:ProductService,public dialogRef: MatDialogRef<DialogueBodyEditProductComponent>,private loginAuthService: LoginAuthService,private catService: CategoryService,private formBuilder: FormBuilder, private router: Router) {
    this.editProdForm = this.formBuilder.group({
    name: [this.data.name, [Validators.required]],
    category: [this.data.category.name,[Validators.required]],
    factory: [this.data.factory, [Validators.required]],
    image: [this.data.image, [Validators.required]]

  })

  this.loginAuthService.isLoggedIn();
  this.loginUser=JSON.parse(localStorage.getItem('currentUser'));
}

  ngOnInit(): void {
    this.listCat();
  }



  editProd(data) {
    data.id=this.data.id;
    this.productService.updateProd(data,this.loginUser.token).subscribe(data => { return true },
      error => {
        console.log("Error");
        return throwError(error);
      });
     console.log("ajout avec succés");
     this.dialogRef.close();

  }
  close() {
    this.dialogRef.close("Modification annulée");
  }



    listCat = () =>
    this.catService.getAllCats().subscribe(res => (this.categories = res));


}
