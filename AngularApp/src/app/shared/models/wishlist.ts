import { wishlistItem } from "./wishlistItem";

export class wishlist{
//     displayName!:String;
//     shortDesc!:String;
//     category!:String;
    items : wishlistItem[] = [];

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item =>{
            totalPrice+=item.price;
        });
        return totalPrice;
    }
}