import { Product } from "./Product";
export class wishlistItem{
    constructor(prod:Product){
        this.prod = prod;
    }
    prod:Product
    quantity:number = 1;
    get price():number{
        return this.prod.price * this.quantity
    }
}