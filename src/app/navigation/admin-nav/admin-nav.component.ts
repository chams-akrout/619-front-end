import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { LoginAuthService } from 'src/app/services/login-auth.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogueBodyAddProductComponent } from 'src/app/ADD/dialogue-body-add-product/dialogue-body-add-product.component';
import { DialogueBodyAddCatComponent } from 'src/app/ADD/dialogue-body-add-cat/dialogue-body-add-cat.component';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {
  @Output() sidenavClose = new EventEmitter();
  public loginUser:any={};
  constructor(private loginAuthService: LoginAuthService, private router: Router, public dialog: MatDialog) {
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
  }

}
