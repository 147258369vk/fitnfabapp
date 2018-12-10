import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import {BehaviorSubject, Observable, Subject, Subscriber} from 'rxjs';
import {of} from 'rxjs/observable/of';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private itemsInCartSubject: BehaviorSubject<Product[]> = new BehaviorSubject([]);
  private itemsInCart: Product[] = [];

  constructor() { 
    this.itemsInCartSubject.subscribe(_=>this.itemsInCart=_);
  }
  public addtoCart(item:Product)
  {
    this.itemsInCartSubject.next([...this.itemsInCart,item]);
  }

  public removeFromCart(item:Product)
  {
    const currentItems=[...this.itemsInCart];
    const itemsWithoutRemoved=currentItems.filter(_=>_.id!==item.id);
    this.itemsInCartSubject.next(itemsWithoutRemoved);
  }
  public getItems():Observable<Product[]>
  {
    return this.itemsInCartSubject.asObservable();

  }
  public getTotalAmount():Observable<number>{
    return this.itemsInCartSubject.map((items:Product[])=>{
      return items.reduce((prev,curr:Product)=>{
        return prev+curr.price;
      },0);
    });
  }
}