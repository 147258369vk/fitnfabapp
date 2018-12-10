export class User {
        fullname:string;
        email:string;
        password:string
   
}

export class ProductUser {
        _id:string;
        productname:string;
        price:string;
        description:string;
        photo:string;
       
}

export class Admin {
        username:string;
        password:string;
}

export class CartItem2{
        email:string;
            description:string;
            price:number;
            quantity:number;
            total:number;
    }

export class cart{
       
        email:string;
        price:string;
        quantity:number;
        subtotal:number;
        productname:string;
}

