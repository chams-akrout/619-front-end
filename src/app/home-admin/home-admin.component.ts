import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginAuthService } from '../services/login-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';
import { DialogueBodyAddProductComponent } from '../ADD/dialogue-body-add-product/dialogue-body-add-product.component';
import { DialogueBodyAddCatComponent } from '../ADD/dialogue-body-add-cat/dialogue-body-add-cat.component';
@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  public loginUser:any={};
  public users: any=[];
  constructor(private dialog: MatDialog,private loginAuthService: LoginAuthService,private router: Router,private userService:UserService) {
    this.loginAuthService.isLoggedIn();
    this.loginUser=JSON.parse(localStorage.getItem('currentUser'));
  }
  public onSidenavClose = () => {
    this.sidenavClose.emit();
  }


  openDialogP(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "400px";
    this.dialog.open(DialogueBodyAddProductComponent, dialogConfig);

  }

  openDialogCat(): void {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "400px";
    this.dialog.open(DialogueBodyAddCatComponent, dialogConfig);

  }


  logout(){
    localStorage.removeItem('currentUser');
    this.router.navigate([ '']);
    }
  ngOnInit(): void {

    this.userService.getAllUsers(this.loginUser.token).subscribe(users=>{
      this.users=users;
    })
  }

}
