import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { LoginAuthService } from '../services/login-auth.service';
import { DialogueBodyEditCatComponent } from '../EDIT/dialogue-body-edit-cat/dialogue-body-edit-cat.component';

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
@Component({
  selector: 'app-list-cat',
  templateUrl: './list-cat.component.html',
  styleUrls: ['./list-cat.component.css']
})
export class ListCatComponent implements OnInit {
  public loginUser:any={};
  public categories;
  constructor(private loginAuthService: LoginAuthService,private catService: CategoryService, private router: Router, public dialog: MatDialog) {
    this.loginAuthService.isLoggedIn();
    this.loginUser=JSON.parse(localStorage.getItem('currentUser'));
   }

  ngOnInit(): void {
    this.listCat();
  }

  listCat = () =>
    this.catService.getAllCats().subscribe(res => (this.categories = res));


    deleteCat(catId) {
      //console.log(this.loginUser.token);
    this.catService.deleteCat(catId,this.loginUser.token).subscribe(data=>{
      console.log("success");

 });
 this.router.navigate(['/home/admin']);
  }
  openDialogEditCat(name,id): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {name:name,id:id} ;
    dialogConfig.width = "300px";
    let dialogRef = this.dialog.open(DialogueBodyEditCatComponent, dialogConfig);

  }


}
