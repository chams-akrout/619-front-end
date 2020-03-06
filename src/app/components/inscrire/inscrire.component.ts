import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConsommateurModule } from 'src/app/models/consommateur/consommateur.module';
import {MustMatch} from 'src/app/validators/validators.module';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { Observable, throwError } from 'rxjs';


@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent implements OnInit {
  signupForm: FormGroup;
  consommateur: ConsommateurModule;
  submitted = false;
  
  // private router: Router,private formBuilder: FormBuilder
  constructor(private formBuilder: FormBuilder,private router :Router,private authService: AuthUserService) {
    
   }
   

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      mdp: ['', [Validators.required, Validators.minLength(6)]],
      cmdp: ['', [Validators.required]],
     name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      address: ['', [Validators.required]]},{
    
      validators:[MustMatch('mdp','cmdp')]
    });
  }
  get f() { return this.signupForm.controls; }


  inscrire(value) {
    this.submitted= true; 
    console.log(value)
    this.consommateur=value;
    // this.consommateur.password = this.signupForm.controls.mdp.value;
    // this.consommateur.name = this.signupForm.controls.name.value;
    // this.consommateur.lastName = this.signupForm.controls.lastName.value;
    // this.consommateur.address = this.signupForm.controls.address.value;
    this.consommateur.role="user";
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
