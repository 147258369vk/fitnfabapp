import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {AdminComponent} from '../admin/admin.component'
@Component({
  selector: 'app-adminlogout',
  templateUrl: './adminlogout.component.html',
  styleUrls: ['./adminlogout.component.css']
})
export class AdminlogoutComponent implements OnInit {
a=true;
  constructor(private router:Router, public dialogRef: MatDialogRef<AdminComponent>) { }
  logout(){
   localStorage.removeItem("admin");
   this.router.navigateByUrl("/adminlogin");
  }
 
  onNoClick(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

}
