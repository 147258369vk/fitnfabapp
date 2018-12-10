import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.service';
import { User } from '../../shared/user.model';
import { Router } from '@angular/router';
import {MatDialog,MatDialogRef} from '@angular/material';
import { AdminlogoutComponent } from '../../adminlogout/adminlogout.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private userservice:UserService,private router: Router,public dialog:MatDialog) { }
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
   
    this.userservice.viewuser().subscribe((res)=>
    {
      this.userservice.data=res as User[];
    })
  }

}
