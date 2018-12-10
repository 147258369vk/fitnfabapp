import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { SigninComponent } from '../signin/signin.component';

import { UserService } from '../shared/user.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers:[]
})
export class SignupComponent implements OnInit {
  hide=true;

  showSuccessMessage:boolean;
  serverErrorMessages:string;

    email = new FormControl('', [Validators.required, Validators.email]);
  
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
          this.email.hasError('email') ? 'Not a valid email' :'';
    }
      constructor(public dialog: MatDialog,private userService:UserService,private router: Router) { }
     
      openDialog() {
  this.dialog.closeAll();
        const dialogRef = this.dialog.open(SigninComponent,{width: '60%',});
        dialogRef.disableClose = true;
    
        dialogRef.afterClosed().subscribe(result => {
          console.log(`Dialog result: ${result}`);
       
        });
    
      }
      
  ngOnInit() {
  }

  onSubmit(form:NgForm)
  {
    this.userService.postUser(form.value).subscribe(
      res =>{
        this.showSuccessMessage=true;
        setTimeout(()=>this.showSuccessMessage=false,4000)
      },
      err =>{
        if (err.status === 422) {
          this.serverErrorMessages = err.error.join('<br/>');
        }
        else
          this.serverErrorMessages = 'Something went wrong.Please contact admin.';
      
      }
    );  
    this.router.navigateByUrl('/signin');
    this.dialog.closeAll();
  }
}
