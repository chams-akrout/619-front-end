import { Component } from '@angular/core';
import { LoginAuthService } from './services/login-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Barcode Scanner';

// public currentStatus:any;
//   constructor(private loginAuthService: LoginAuthService) {

//     this.currentStatus=this.loginAuthService.getStatus().subscribe(currentStatus  => {
//       this.currentStatus=currentStatus;
//     })
//    } 1h38!!!!!!!!!!!!
}
