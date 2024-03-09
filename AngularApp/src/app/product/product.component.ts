import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/products/product.service';
import { Product } from '../shared/models/Product';
import { StarRatingComponent } from 'ng-starrating';
import { UsernameService } from '../services/username.service';
import { WishlistService } from '../services/wishlist/wishlist.service';
import { RestService } from '../rest.service';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product!:Product;
  review!:Product[];
  currentRate = 5;
  prodReview!:Product;
  reviewContent = "";
  username:String = "";
  guest!:number;
  message="";

  // star:number = 4;
  constructor(private activatedRoute:ActivatedRoute, private productService:ProductService,
    private cartService:CartService, private router:Router, private userNameService :UsernameService, 
    private wishlistService:WishlistService, private restService: RestService) {
    activatedRoute.params.subscribe((params)=>{
      if(params.id){
        restService.getProductByName(params.id).subscribe((productObj)=>{
          this.product = productObj;
        })
      }
    })
   }
  // setUsername(){
  //   // this.username = this.login.getUsername()
  //   console.log(this.login.getUsername())
  // }
  ngOnInit(): void {
    this.guest = this.productService.guestId;
  }
  addToCart(){
    this.message=this.cartService.addtoCart(this.product);
    alert(this.message);
  }
  onRate($event:{oldValue:number, newValue:number, starRating:StarRatingComponent}) {
    this.currentRate = $event.oldValue;
    
  }
  addReview(prodName:string,reviewComment:any  ) {
    this.username = this.userNameService.userName
    this.product.review.push({
        userId:1,
        userName:this.username,
        rating:this.currentRate,
        reviewComments:this.reviewContent})
        this.reviewContent = ""

  }
  addToWishlist(){
    this.wishlistService.addToWishlist(this.product)
    this.router.navigateByUrl('/wishlist');
  }


}
