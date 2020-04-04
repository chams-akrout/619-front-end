import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsommateurModule } from 'src/app/models/consommateur/consommateur.module';
import {MustMatch} from 'src/app/validators/validators.module';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { Observable, throwError } from 'rxjs';
import { LoginAuthService } from '../services/login-auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  signupForm: FormGroup;
  consommateur: ConsommateurModule;
  submitted = false;

  // private router: Router,private formBuilder: FormBuilder
  constructor(private formBuilder: FormBuilder,private router :Router,private authService: AuthUserService,private loginAuthService: LoginAuthService) {
    this.loginAuthService.isLoggedIn();
   }


  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      cmdp: ['', [Validators.required]],
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]]},
      { validators:[MustMatch('password','cmdp')]}
    );
  }
  get f() { return this.signupForm.controls; }


  inscrire(value) {
    this.submitted= true;
    this.consommateur=value;
    this.consommateur.role="USER";
    this.consommateur.enabled=true;
    this.consommateur.score=10;
    this.authService.createUser(this.consommateur)
      .subscribe(data => { return true },
        error => {
          console.log("Error");
          return throwError(error);
        });
       console.log("ajout avec succés");
       this.router.navigate([ '/home/consommateur']);
  }


}
