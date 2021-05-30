import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-full-date',
  templateUrl: './full-date.component.html',
  styleUrls: ['./full-date.component.css']
})
export class FullDateComponent {

  constructor(
    public dialogRef: MatDialogRef<FullDateComponent>) {}

  close(): void {
    this.dialogRef.close();
  }

}
