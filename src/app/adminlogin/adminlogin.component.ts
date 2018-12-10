import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import {FormControl, Validators} from '@angular/forms';
import {MatDialog,MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  
  hide = true;
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }
 
  constructor(private userservice:UserService,private router:Router,public dialog: MatDialog) { }
  
  onsubmit(form:NgForm){
    this.userservice.adminlogin(form.value).subscribe(
      res =>{
        
        localStorage.setItem("admin",form.value);
          this.router.navigateByUrl('/admin');
          console.log('login');
    },
    err =>{
          this.router.navigateByUrl('/adminlogin');
          alert('something wrong');
          console.log(err)
    });

  }
   
  ngOnInit() {

    if(!(localStorage.getItem("admin")))
    {
      this.router.navigateByUrl("/adminlogin");
    }
    this.dialog.closeAll();
  }

}
