import { Component, OnInit ,ElementRef,Input} from '@angular/core';
import {Http,Response} from '@angular/http';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import { NgForm } from '@angular/forms';
import { UserService } from '../../shared/user.service';
import { ProductUser } from '../../shared/user.model';
import { Router } from '@angular/router';
import {MatDialog,MatDialogRef} from '@angular/material';
import { AdminlogoutComponent } from '../../adminlogout/adminlogout.component';

import { environment } from 'src/environments/environment';
import { viewAttached } from '@angular/core/src/render3/instructions';

const URL = 'http://localhost:3000/api/productregister';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({url:URL, itemAlias: 'photo'});
  
  showSuccessMessage:boolean;
  serverErrorMessages:string;
  constructor(private userservice:UserService,private router:Router,public dialog:MatDialog) { }
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
   
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (item: any, response: any, status: any, headers: any) => {
         console.log('ImageUpload:uploaded:', item, status, response);
         alert('File uploaded successfully');
     };
    this.refreshproduct();

  }
 
  onEdit(product:ProductUser){
    this.userservice.selectproductuser=product;
  }
  refreshproduct(){
    this.userservice.viewproduct().subscribe((res)=>{
      this.userservice.productuser=res as ProductUser[];
    })
  }
  ondelete(){
    if(confirm('are you sure delete this record')==true){
    this.userservice.productdelete().subscribe((res)=>{
      
      this.refreshproduct();
    })
  }
  }
  onSubmit(form:NgForm)
   {
    
      console.log(form.value);

      this.userservice.postproductuser(form.value).subscribe(
        res=>{
          this.showSuccessMessage=true;
          setTimeout(()=>this.showSuccessMessage=false,4000);
        },
        err=>{
          this.serverErrorMessages=err;

        }
      )
      // if(form.value.id=""){
    // this.userservice.postproductuser(form.value).subscribe(
    //   res =>{
    //     this.showSuccessMessage=true;
    //     setTimeout(()=>this.showSuccessMessage=false,4000)
    //   },
    //   err =>{
    //     if (err.status === 422) {
  
    //       this.serverErrorMessages = err.error.join('<br/>');
    //     }
    //     else
    //       this.serverErrorMessages = 'Something went wrong.Please contact admin.';
    //       console.log(err);
    //   } 
    //  );
   // }
    /*else{
      this.userservice.productupdate(form.value).subscribe((res)=>{
         this.userservice.viewproduct().subscribe((res)=>{
           this.userservice.productuser=res as ProductUser[];
         })
       })
     }*/   
  }
}
