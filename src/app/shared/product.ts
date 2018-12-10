import { NumberTypeAnnotation } from "babel-types";

export interface Product {
    id?:number;
    productname?:string;
    price?:number;
    quantity?:number;
   

}
export interface CartItem{
    email?:string;
        description?:string;
        price?:number;
        quantity?:number;
        total?:number;
}
