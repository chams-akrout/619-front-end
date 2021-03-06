import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-dialogue-body-add-cat',
  templateUrl: './dialogue-body-add-cat.component.html',
  styleUrls: ['./dialogue-body-add-cat.component.css']
})
export class DialogueBodyAddCatComponent implements OnInit {
  public loginUser:any={};
  addCatForm: FormGroup;
  constructor(private loginAuthService: LoginAuthService,public dialogRef: MatDialogRef<DialogueBodyAddCatComponent>, private categoryService:CategoryService,private formBuilder: FormBuilder, private router: Router) {
    this.addCatForm = this.formBuilder.group({
      name: ['', [Validators.required]]
    })

    this.loginAuthService.isLoggedIn();
    this.loginUser=JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
  }
  addCat(data) {
    console.log(data);
    this.categoryService.createCat(data,this.loginUser.token).subscribe(data => { return true },
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
}
