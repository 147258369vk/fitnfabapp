import { Component, OnInit } from '@angular/core';

import {MatDialog} from '@angular/material';
import { UserService } from '../shared/user.service';

import { LogoutComponent } from '../logout/logout.component';
import{ChangepassComponent} from '../changepass/changepass.component';

@Component({
  selector: 'app-workout-plans',
  templateUrl: './workout-plans.component.html',
  styleUrls: ['./workout-plans.component.css']
})
export class WorkoutPlansComponent implements OnInit {
 
  constructor(public dialog: MatDialog,public userService:UserService) { }
  openDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(LogoutComponent, {width:'40%'});
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  openDialog1(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(ChangepassComponent, {width:'60%'});
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    if(this.userService.getsessionToken()){

      //this.username=JSON.stringify(this.userService.getsessionToken['user']);
     console.log(this.userService.getsessionToken()); 
      
       console.log("session stored");
     }
     else
     {
       alert("please login");
     }
  }

}
