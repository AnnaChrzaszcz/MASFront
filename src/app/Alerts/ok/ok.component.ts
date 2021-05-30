import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {BirthdayParty} from '../../../models/birthdayParty';

@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.css']
})
export class OKComponent {

  constructor(
    public dialogRef: MatDialogRef<OKComponent>, @Inject(MAT_DIALOG_DATA) public data: BirthdayParty) {}

  close(): void {
    this.dialogRef.close();
  }

}
