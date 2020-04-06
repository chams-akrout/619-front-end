import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormGroup, Validators, FormBuilder,ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogueBodyAddCatComponent } from '../dialogue-body-add-cat/dialogue-body-add-cat.component';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/porduct.service';
import { throwError } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-dialogue-body-add-product',
  templateUrl: './dialogue-body-add-product.component.html',
  styleUrls: ['./dialogue-body-add-product.component.css']
})
export class DialogueBodyAddProductComponent implements OnInit {
  public categories;
  product:Product={};
  public loginUser:any={};
  addProdForm: FormGroup;
  constructor(private productService:ProductService,public dialogRef: MatDialogRef<DialogueBodyAddProductComponent>,private loginAuthService: LoginAuthService,private catService: CategoryService,private formBuilder: FormBuilder, private router: Router) {
    this.addProdForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    category: ['',[Validators.required]],
    factory: ['', [Validators.required]],
    image: ['', [Validators.required]]

  })

  this.loginAuthService.isLoggedIn();
  this.loginUser=JSON.parse(localStorage.getItem('currentUser'));
}

  ngOnInit(): void {
    this.listCat();
  }



  addProd(data) {
    console.log(data.category);
    this.productService.createProd(data,this.loginUser.token).subscribe(data => { return true },
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
