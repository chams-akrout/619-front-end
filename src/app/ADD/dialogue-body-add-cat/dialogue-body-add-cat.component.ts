import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { LoginAuthService } from 'src/app/services/login-auth.service';

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


    this.categoryService.createCat(data,this.loginUser.token);
    this.dialogRef.close();

  }
  close() {
    this.dialogRef.close("Modification annulée");
  }
}
