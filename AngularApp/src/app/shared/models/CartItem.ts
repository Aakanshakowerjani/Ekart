import { Product } from "./Product";


export class CartItem{
    constructor(product:Product){
        this.product=product;
    }
    cartProductId?:number;
    product:Product;
    quantity:number=1;

    price():number{
        return this.product.offerPrice*this.quantity;
    }
}