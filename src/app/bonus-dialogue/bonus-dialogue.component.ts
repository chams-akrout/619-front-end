import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-bonus-dialogue',
  templateUrl: './bonus-dialogue.component.html',
  styleUrls: ['./bonus-dialogue.component.css']
})
export class BonusDialogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<BonusDialogueComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close("Modification annulée");
  }
}
