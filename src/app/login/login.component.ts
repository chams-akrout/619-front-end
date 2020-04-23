import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthUserService } from "src/app/services/auth-user.service";
import { ConsommateurModule } from "src/app/models/consommateur/consommateur.module";
import { Observable, throwError } from "rxjs";
import { LoginAuthService } from "../services/login-auth.service";
import { UserService } from "../services/user.service";
import { MatDialogConfig, MatDialog } from "@angular/material/dialog";
import { WelcomeDialogComponent } from "../welcome-dialog/welcome-dialog.component";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  newC: Observable<ConsommateurModule>;
  // returnUrl: string;
  public consommateur: any = {};

  constructor(
    public dialog: MatDialog,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private authService: AuthUserService,
    private router: Router,
    private loginAuthService: LoginAuthService
  ) {
    this.loginAuthService.isLoggedIn();
  }
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  login(value) {
    this.consommateur = value;
    this.authService.login(this.consommateur).subscribe((data) => {
      if (data) {
        if (data.token) {
          localStorage.setItem("currentUser", JSON.stringify(data));
          if (data.user.role === "ADMIN") {
            this.router.navigate(["/home/admin"]);
          }
          if (data.user.role === "USER") {
            this.userService.updateUserScore(data.user).subscribe(
              (data) => {
                return true;
              },
              (error) => {
                console.log("Error");
                return throwError(error);
              }
            );
            this.router.navigate(["/home/consommateur"]);
            const dialogConfig = new MatDialogConfig();
            dialogConfig.data = {
              name: data.user.name,
              score: data.user.score,
            };
            dialogConfig.width = "400px";
            let dialogRef = this.dialog.open(
              WelcomeDialogComponent,
              dialogConfig
            );
          }
        }
      }
    });
  }
}
