import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';
import { ProductUser } from '../shared/user.model';
import { Product } from '../shared/product';
import { CartService } from '../shared/cart.service';
import { Router } from '@angular/router';
import {MatDialog} from '@angular/material';


import { LogoutComponent } from '../logout/logout.component';
import{ChangepassComponent} from '../changepass/changepass.component';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {

  constructor(private userservice:UserService,private cartService:CartService,private router:Router,public dialog: MatDialog) { }
  
//   product1:Product={
//     id:1,
//     productname:"MuscleBlaze Cookies and and Cream Super Gainer XXL, 6.6lbs/3kg",
//     price:2049.00 

// };
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


  i =0;
  images=["../assets/st1.jpg","../assets/st4.jpg","../assets/st5.jpg"];
  src = "";
  changeimg(){
    this.src =this.images[this.i];    
   
      if(this.i<this.images.length-1){
        this.i++;
      } else {
        this.i=0;
      }
      
      const my = this;
      setTimeout(function(){ 
        my.changeimg();
      }, 3000);
    }

  ngOnInit() {
    this.changeimg();
    this.userservice.viewproduct().subscribe((res)=>{
      this.userservice.productuser=res as ProductUser[];
    })
  }

  public addToCart(item:Product) {
    item.quantity=1;
    
    this.cartService.addtoCart(item);

    this.router.navigateByUrl('/cart');
   // this.cartService.addtoCart(product);
   // this.router.navigateByUrl('/cart');
  }
    

}
