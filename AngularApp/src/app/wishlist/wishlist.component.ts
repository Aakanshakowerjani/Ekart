import { Component, OnInit } from '@angular/core';
import { wishlist } from '../shared/models/wishlist';
import { ActivatedRoute, Router } from '@angular/router';
import { WishlistService } from '../services/wishlist/wishlist.service';
import { wishlistItem } from '../shared/models/wishlistItem';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlists!:wishlist;

  constructor(private wishlistService:WishlistService,private route:ActivatedRoute,
    private cartService:CartService,private router:Router) {
    this.setWishlist()
   }

  removeFromwishlist(wishlistItem:wishlistItem){
    this.wishlistService.removeFromWishlist(wishlistItem.prod.displayName);
    this.setWishlist()
  }

  changeQuantity(wishlistItem:wishlistItem,quantityInString:string){
    const quantity = parseInt(quantityInString);
    this.wishlistService.changeQuantity(wishlistItem.prod.displayName,quantity);
    this.setWishlist()
  }

  ngOnInit(): void {
  }
  setWishlist(){
    this.wishlists = this.wishlistService.getWishlist();
  }
  moveToCart(wishlistItem:wishlistItem){
    this.cartService.addtoCart(wishlistItem.prod);
    this.router.navigateByUrl('/cart');
    this.removeFromwishlist(wishlistItem)
  }
}
