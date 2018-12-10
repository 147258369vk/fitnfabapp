import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { User, ProductUser,CartItem2,cart} from './user.model';
import { CartItem } from './product';
import { environment } from '../../environments/environment';
import { AuthGuard } from '../auth.guard';
import { Shipping } from'./shipping.model';

import { getLocaleTimeFormat } from '@angular/common';
import { Admin } from '../shared/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  adminuser:Admin={
    username:'',
    password:''
  }
  data:User[];
  productuser:ProductUser[];
  cartshow:CartItem2[];  
  shippinguser:Shipping[];

  cartitem:CartItem={
    email:'',
    description:'',
    price:0,
    quantity:0,
    total:0
    //totalamount:''

  }
 
  selectedUser:User={  
    fullname:'',
    email:'',
    password:''
  };

  selectproductuser:ProductUser={
    _id:'',
    productname:'',
    price:'',
    description:'',
    photo:''
   
  }
  selectcart:cart={
   email:'',
    price:'',
    quantity:null,
    subtotal:null,
    productname:''
  }
  selectship:Shipping={
    email:'',
    fullname:'',
    address:'',
    city:'',
    phoneno:null,
    postalcode:null
  }
  
  constructor(private http:HttpClient) {}
  noAuthHeader = { headers: new HttpHeaders({ 'NoAuth': 'True' }) };
  
  //user
    postUser(user:User){
      return this.http.post(environment.apiBaseUrl+'/register',user,this.noAuthHeader);
     }
     viewuser(){
       return this.http.get(environment.apiBaseUrl+'/view');
     }
     updateuser(user:User){
       return this.http.put(environment.apiBaseUrl+'/updateuser/:id',user);
     }

    //add to cart 
    storecart(product:CartItem){
      return this.http.post(environment.apiBaseUrl+"/checkout",product);
    }
//product
     postproductuser(productuser:ProductUser){
       return this.http.post(environment.apiBaseUrl+'/productregister',productuser);
     }
     viewproduct(){
      return this.http.get(environment.apiBaseUrl+'/productview');
    }
    productupdate(product:ProductUser){
      return this.http.put(environment.apiBaseUrl+'/productupdate/:id',product);
    }
    productdelete(){
      return this.http.delete(environment.apiBaseUrl+'/productdelete/:id');
    }

     login(authCredentials) {
      return this.http.post(environment.apiBaseUrl + '/authenticate', authCredentials,this.noAuthHeader);
    }
   setsessionToken(SessionUser:string)
   {
     localStorage.setItem('user',SessionUser);
   }

   getsessionToken()
   {
  
     return localStorage.getItem('user');
   }
   deletesessionToken()
   {
      return localStorage.removeItem('user');
   }

//display cart
displayCart(user)
{
return this.http.get(environment.apiBaseUrl+'/cartshow/:email',user);
}

 //shipping
 shipping(ship:Shipping){
  return this.http.post(environment.apiBaseUrl+'/shipping',ship)
 }

shippingview(){
 return this.http.get(environment.apiBaseUrl+'/shippingview');
}
  
   //admin
   adminlogin(admin){
    return this.http.post(environment.apiBaseUrl+'/admin',admin);
  }
  
   setToken(token: string) {
      localStorage.setItem('token', token);
    }
   
    getToken() {
      return localStorage.getItem('token');
    }
   
    deleteToken() {
      return localStorage.removeItem('token');
    }
    getUserPayload() {
      var token = this.getToken();
      if (token) {
        var userPayload = atob(token.split('.')[1]);
        return JSON.parse(userPayload);
      }
      else
        return null;
    }
    isLoggedIn() {
     
      var userPayload = this.getUserPayload();
      if (userPayload)
        return userPayload.exp > Date.now() / 1000;
        
      else
        return false;
    }
    placeorder(cart:cart){
      return this.http.post(environment.apiBaseUrl+'/checkout',cart);
  }
}