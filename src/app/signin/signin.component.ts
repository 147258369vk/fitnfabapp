import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';

import { SignupComponent } from '../signup/signup.component';
import { ForgotpasswordComponent } from '../forgotpassword/forgotpassword.component';
import{Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hide=true;
  
  showSuccessMessage:boolean;
  serverErrorMessages:string;

    email = new FormControl('', [Validators.required, Validators.email]);
  
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' : '';
    }

      constructor(public dialog: MatDialog,private userService:UserService,private router :Router) { }
      
      openDialog1(): void {
        this.dialog.closeAll();
        const dialogRef = this.dialog.open(SignupComponent, {width: '50%',});
        dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');   
        });
      }

      openDialog2(): void {
        this.dialog.closeAll();
        const dialogRef = this.dialog.open(ForgotpasswordComponent, {width:'40%'});
        dialogRef.disableClose = true;
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
        });
      }

  ngOnInit() {
    if(this.userService.isLoggedIn())
  this.router.navigateByUrl('#');
  }

  model ={
    email:'',
    password:''
  };
  onSubmit(form:NgForm)
  {
    var email=(document.getElementById("email") as HTMLInputElement).value;
    this.userService.login(form.value).subscribe(
      res => {
        var sessionuser=JSON.stringify(res['SessionUser']).toString();
        this.userService.setToken(res['token'])
       this.userService.setsessionToken(sessionuser);
       //  alert(sessionuser); 
       this.router.navigateByUrl('home');
       this.dialog.closeAll();
      },
      err => {
        this.serverErrorMessages = err.error.message;
      }
    );
  }
}
