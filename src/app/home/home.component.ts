import { Component, OnInit } from '@angular/core';

import {MatDialog,MatDialogRef} from '@angular/material';
import { LogoutComponent } from '../logout/logout.component';
import { UserService } from '../shared/user.service';
import { ChangepassComponent } from '../changepass/changepass.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  username:string;
 constructor(public dialog: MatDialog,public userService:UserService) {}
 openDialog(): void {
  this.dialog.closeAll();
  const dialogRef = this.dialog.open(LogoutComponent, {width:'40%'});
  dialogRef.disableClose = true;
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