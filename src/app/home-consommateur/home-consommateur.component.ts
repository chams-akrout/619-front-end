import { Component, OnInit, ɵConsole } from "@angular/core";
import { LoginAuthService } from "../services/login-auth.service";
import { Router } from "@angular/router";
import Quagga from "quagga";
import $ from "jquery";
import { ConditionalExpr } from "@angular/compiler";

import { UserService } from "../services/user.service";
import { ConsommateurModule } from "../models/consommateur/consommateur.module";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ProductService } from "../services/porduct.service";
import { throwError } from "rxjs";

@Component({
  selector: "app-home-consommateur",
  templateUrl: "./home-consommateur.component.html",
  styleUrls: ["./home-consommateur.component.css"],
})
export class HomeConsommateurComponent implements OnInit {
  public loginUser: any = {};
  public user: any = {};
  public localProducts;
  barcodeForm: FormGroup;
  constructor(
    private productService: ProductService,
    private formBuilder: FormBuilder,
    private loginAuthService: LoginAuthService,
    private router: Router,
    private userService: UserService
  ) {
    this.loginAuthService.isLoggedIn();
    this.loginUser = JSON.parse(localStorage.getItem("currentUser"));

    this.barcodeForm = this.formBuilder.group({
      barcode: ["", [Validators.required]],
    });
  }

  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigate([""]);
  }
  ngOnInit(): void {
    //console.log(this.loginUser.token);
    this.userService.getUser(this.loginUser.token).subscribe((user) => {
      this.user = user;
    });
    this.scanner();
  }

  scanner() {
    if (
      $("#barcode-scanner").length > 0 &&
      navigator.mediaDevices &&
      typeof navigator.mediaDevices.getUserMedia === "function"
    )
      // safely access `navigator.mediaDevices.getUserMedia`
      console.log("hello");

    if (Quagga.initialized == undefined) {
      Quagga.onDetected(function (result) {
        var last_code = result.codeResult.code;
        if (last_code.length == 13) {
          let last_result = [];
          last_result.push(last_code);
          var code = order_by_occurrence(last_result)[0];
          Quagga.stop();
          console.log(last_result[0]);
          document.getElementById("thumbnails").innerHTML = last_result[0];
        }
      });
      var order_by_occurrence = function (arr) {
        var counts = {};
        console.log(arr);
        arr.forEach = function (value) {
          if (!counts[value]) {
            counts[value] = 0;
          }
          counts[value]++;
        };

        return Object.keys(counts).sort(
          (curKey, nextKey) => counts[curKey] - counts[nextKey]
        );
      };
    }
    Quagga.init(
      {
        inputStream: {
          name: "Live",
          type: "LiveStream",
          numOfWorkers: navigator.hardwareConcurrency,
          target: document.querySelector("#interactive"), // Or '#yourElement' (optional)
        },
        decoder: {
          readers: [
            "ean_reader",
            "ean_8_reader",
            "code_39_reader",
            "code_39_vin_reader",
            "codabar_reader",
            "upc_reader",
            "upc_e_reader",
          ],
        },
      },
      function (err) {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
      }
    );
  }



  listProd() {

    var a=(<HTMLScriptElement>document.getElementById("thumbnails")).textContent;
      console.log(typeof a);
      console.log(a);

    this.productService.getLocalProductsByString(a).subscribe(
      (res) => (this.localProducts = res),
      (error) => {
        console.log("Error");
        return throwError(error);
      }
    );
 //   this.router.navigate(["/localProducts",a]);
  }
}
