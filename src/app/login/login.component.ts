import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthUserService } from 'src/app/services/auth-user.service';
import { ConsommateurModule } from 'src/app/models/consommateur/consommateur.module';
import { Observable, throwError } from 'rxjs';
 @Component({selector:'app-login',
        templateUrl: './login.component.html',
        styleUrls:['./login.component.css']
       })
        export class LoginComponent implements OnInit {
          loginForm: FormGroup;
          loading = false;
          submitted = false;
          newC: Observable<ConsommateurModule >;
          // returnUrl: string;
          consommateur : ConsommateurModule;
          
            constructor(private formBuilder: FormBuilder,private authService: AuthUserService,private router :Router) {

            }
            ngOnInit(): void {
            
                this.loginForm = this.formBuilder.group({
                  email: ['', [Validators.required, Validators.email]],
                  mdp: ['',[Validators.required]]
                });
            }
            get f() { return this.loginForm.controls; }

         
      login(value){
        this.consommateur=value;
if(this.consommateur.email=="admin@gmail.com"){
  this.router.navigate([ '/home/admin']);
} else{this.router.navigate([ '/home/consommateur']);}
        

      //   this.consommateur=value;
      //   console.log(this.consommateur.email);
      // this.authService.login(this.consommateur.email)
      //    .subscribe( data=>{
      //      if (data.password==this.loginForm['mdp'].value && data.role=="admin"){
      //        this.router.navigate([ '/home/admin']);
      //      }else if(data.password==this.loginForm['mdp'].value && data.role=="user"){
      //       this.router.navigate([ '/home/consommateur']);
      //      }
      //    },
      //    error => { 
      //     console.log("Error");
      //     return throwError(error);
      //   });
         
      }



          //     // stop here if form is invalid
          //     if (this.loginForm.invalid) {
          //         return "ok";
          //     }else {
          //       "okiiiiii"
          //     }
          // // this.loading=true;
             
          //             }
    
      
            
            // login (value){
            //   console.log(value);
            //   this.consommateur.email=this.loginForm.controls.email.value;
            //   this.consommateur.password=this.loginForm.controls.password.value;
            //   }
          
          
          


    
        }
          