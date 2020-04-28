import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-coupon-dialogue',
  templateUrl: './coupon-dialogue.component.html',
  styleUrls: ['./coupon-dialogue.component.css']
})
export class CouponDialogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<CouponDialogueComponent>) { }
  close() {
    this.dialogRef.close("Modification annulée");
  }
  ngOnInit(): void {
  }

}
