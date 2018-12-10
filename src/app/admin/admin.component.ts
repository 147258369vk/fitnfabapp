import { Component, OnInit } from '@angular/core';
import {MatDialog,MatDialogRef} from '@angular/material';
import { AdminlogoutComponent } from '../adminlogout/adminlogout.component';
import { Router } from '@angular/router';




@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  constructor(public dialog: MatDialog,private router:Router) { }
  openDialog(): void {
    this.dialog.closeAll();
    const dialogRef = this.dialog.open(AdminlogoutComponent, {width:'40%'});
    dialogRef.disableClose = true;
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

 
  
  ngOnInit() {
    if(!(localStorage.getItem("admin")))
    {
      this.router.navigateByUrl("/adminlogin");
    }
   
  }

}
