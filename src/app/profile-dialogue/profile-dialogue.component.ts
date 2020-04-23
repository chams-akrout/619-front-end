import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-dialogue',
  templateUrl: './profile-dialogue.component.html',
  styleUrls: ['./profile-dialogue.component.css']
})
export class ProfileDialogueComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<ProfileDialogueComponent>) { }

  ngOnInit(): void {
  }
  close() {
    this.dialogRef.close("Modification annulée");
  }
}
