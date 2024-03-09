import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Product } from 'src/app/shared/models/Product';
import { wishlist } from 'src/app/shared/models/wishlist';
import { wishlistItem } from 'src/app/shared/models/wishlistItem';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  private wishlist:wishlist = new wishlist();

  constructor() { }
  addToWishlist(prod:Product){
    let wishlistItems = this.wishlist.items.find(item => item.prod.displayName === prod.displayName);
    if(wishlistItems){
      this.changeQuantity(prod.displayName,wishlistItems.quantity+1);
      return; 
    }
    this.wishlist.items.push(new wishlistItem(prod))
  }
  removeFromWishlist(prodName:String):void{
    this.wishlist.items = this.wishlist.items.filter(item=> item.prod.displayName!=prodName);

  }
  changeQuantity(prodName:String,quantity:number){
    let wishlistItem = this.wishlist.items.find(item => item.prod.displayName == prodName);
    if(!wishlistItem){
      return ;
    }
    wishlistItem.quantity = quantity;
  }
  getWishlist():wishlist{
    return this.wishlist;
  }
}