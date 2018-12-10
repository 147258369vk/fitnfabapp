import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

import { HomeComponent } from '../home/home.component';

import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private userservice:UserService,private router:Router,public dialogRef: MatDialogRef<HomeComponent>) { }
  logout(){
    this.userservice.deleteToken();
    this.userservice.deletesessionToken();
    this.router.navigateByUrl('/');
  }

  ngOnInit() {
  }
  onNoClick(): void {
    this.dialogRef.close();
}
}
