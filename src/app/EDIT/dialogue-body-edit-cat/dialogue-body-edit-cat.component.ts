import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CategoryService } from 'src/app/services/category.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
@Component({
  selector: 'app-dialogue-body-edit-cat',
  templateUrl: './dialogue-body-edit-cat.component.html',
  styleUrls: ['./dialogue-body-edit-cat.component.css']
})
export class DialogueBodyEditCatComponent implements OnInit {
  public loginUser:any={};
  editCatForm: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,private loginAuthService: LoginAuthService,public dialogRef: MatDialogRef<DialogueBodyEditCatComponent>, private categoryService:CategoryService,private formBuilder: FormBuilder, private router: Router) {
    this.editCatForm = this.formBuilder.group({
      name: [this.data.name, [Validators.required]]
    })

    this.loginAuthService.isLoggedIn();
    this.loginUser=JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit(): void {
  }


  editCat(data) {
    console.log(this.data.id);
    data.id=this.data.id;
    this.categoryService.updateCat(data,this.loginUser.token).subscribe(data => { return true },
      error => {
        console.log("Error");
        return throwError(error);
      });
     console.log("ajout avec succés");
     this.dialogRef.close();
     this.router.navigate(['/home/admin']);
  }
  close() {
    this.dialogRef.close("Modification annulée");
  }
}
