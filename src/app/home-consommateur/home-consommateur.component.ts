import { Component, OnInit } from '@angular/core';
import { LoginAuthService } from '../services/login-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { ConsommateurModule } from '../models/consommateur/consommateur.module';

@Component({
  selector: 'app-home-consommateur',
  templateUrl: './home-consommateur.component.html',
  styleUrls: ['./home-consommateur.component.css']
})
export class HomeConsommateurComponent implements OnInit {
  public loginUser:any={};
  public user:any={};
  constructor(private loginAuthService: LoginAuthService,private router: Router,private userService:UserService) {
    this.loginAuthService.isLoggedIn();
    this.loginUser=JSON.parse(localStorage.getItem('currentUser'));
  }

logout(){
localStorage.removeItem('currentUser');
this.router.navigate([ '']);
}
  ngOnInit(): void {
//console.log(this.loginUser.token);
    this.userService.getUser(this.loginUser.token).subscribe(user=>{
      this.user=user;

    })
  }

}
