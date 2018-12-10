import { Component, OnInit } from '@angular/core';
import {CartService } from '../shared/cart.service';
import { Product } from '../shared/product';
import {Observable} from 'rxjs';
import {of} from 'rxjs/observable/of';
import { NgForm } from '@angular/forms';
import { numberTypeAnnotation } from 'babel-types';
 
import { LogoutComponent } from '../logout/logout.component';
import { ChangepassComponent} from '../changepass/changepass.component';

import {MatDialog,MatDialogRef} from '@angular/material';
import { UserService } from '../shared/user.service';
import { CartItem } from '../shared/product';
import { CartItem2} from '../shared/user.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  showSuccessMessage:boolean;
  serverErrorMessages:string;
  public shoppingCartItems$: Observable<Product[]> = of([]);
  public shoppingCartItems: Product[] = [];

  username:string;
 subtotalAmount:number;
  constructor(private cartService: CartService,private dialog:MatDialog,public userService:UserService) {
    this.shoppingCartItems$ = this
    .cartService
    .getItems();

  this.shoppingCartItems$.subscribe(_ => this.shoppingCartItems = _);
    
   }
   
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
  ngOnInit() {
   
    let data=localStorage.getItem("cart");
    


    if(this.userService.getsessionToken()){

      this.username=JSON.stringify(this.userService.getsessionToken['user']);
     console.log(this.userService.getsessionToken()); 
      
       console.log("session stored");
       this.userService.displayCart(this.username).subscribe((res)=>{
          //this.userService.cartshow=res as CartItem2[];
       });
     }
     else
     {
       alert("please login");
     }
    
  }
  public getTotal(): Observable<number> {
    return this.cartService.getTotalAmount();
  }

  public removeItem(item: Product) {
    this.cartService.removeFromCart(item)
  }

  
  get subtotal() {
    let Total:number=0;
    for (let p of this.shoppingCartItems) {

    
    localStorage.setItem("cartdetails",JSON.stringify(p));
    
      Total += p.price * p.quantity;
  
    
    }
    return Math.round(Total * 100) / 100;
  }


 
  storecart(product:CartItem) 
  {
   
    console.log(product);
  product.email=localStorage.getItem("user");
    product.total=product.price*product.quantity;
    var cartstorage=localStorage.setItem("cartitems",JSON.stringify(product));
  this.userService.storecart(product).subscribe(
    (res)=>{
    console.log(res);
    (err)=>{
      console.log(err);
    }
  })
  }
}
