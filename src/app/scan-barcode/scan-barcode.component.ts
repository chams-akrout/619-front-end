import { Component, OnInit, ɵConsole } from '@angular/core';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ListLocalProductsComponent } from '../list-local-products/list-local-products.component';
import Quagga from "quagga";
import $ from "jquery";
import { ConditionalExpr } from "@angular/compiler";
import { LoginAuthService } from '../services/login-auth.service';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-scan-barcode',
  templateUrl: './scan-barcode.component.html',
  styleUrls: ['./scan-barcode.component.css']
})
export class ScanBarcodeComponent implements OnInit {
  public loginUser: any = {};
  public user: any = {};
  constructor(  private loginAuthService: LoginAuthService,
    private router: Router,
    private userService: UserService,public dialog: MatDialog) { }
  logout() {
    localStorage.removeItem("currentUser");
    this.router.navigate([""]);
  }


  ngOnInit(): void {
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



  listProdByString() {
    var a=(<HTMLScriptElement>document.getElementById("thumbnails")).textContent;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.data = {barcode:a} ;
    dialogConfig.width = "400px";
    let dialogRef = this.dialog.open(ListLocalProductsComponent, dialogConfig);
  }

}
