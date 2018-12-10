import { Component, OnInit } from '@angular/core';

import {MatDialog,MatDialogRef} from '@angular/material';
import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { DISABLED } from '@angular/forms/src/model';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
  constructor(public dialog: MatDialog) { 
    
  }
  openDialog() {
    
    const dialogRef = this.dialog.open(SigninComponent,{width: '60%',},);
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      dialogRef.close(SignupComponent);
    });
  }

  ngOnInit() {
    this.openDialog();
  }

}
