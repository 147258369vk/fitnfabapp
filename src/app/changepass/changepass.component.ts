import { Component, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css']
})
export class ChangepassComponent implements OnInit {
  hide = true;

  constructor(public dialogRef: MatDialogRef<HomeComponent>) { }
  onNoClick(): void {
    this.dialogRef.close();
}

  ngOnInit() {
  }

}
