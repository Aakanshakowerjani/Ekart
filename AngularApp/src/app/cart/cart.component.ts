import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/products/product.service';
import { UsernameService } from '../services/username.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!:Cart;
  cartItems!:CartItem[];
  checked=false;
  userAddress!:string;
  paymentOption!:string;
  message!:string;
  
  constructor(private cartService: CartService, private restService: RestService,
    private userService:UsernameService,private productService: ProductService,private router:Router) {
      if(this.productService.guestId==0){
        this.cart=this.cartService.getCart();
      }
      else{
        this.restService.getCustomerByUsername(this.userService.userName).subscribe((user)=>{
          this.restService.cartOfUser(user.emailId).subscribe((data)=>{
            this.cartItems=data;
            this.cart=new Cart();
            this.cart.items=this.cartItems;
            
          })
        })
        this.cart=this.cartService.getCart();
      }
   }

  ngOnInit(): void {
    if(this.productService.guestId==0){
      this.cart=this.cartService.getCart();
    }
    else{
      this.restService.getCustomerByUsername(this.userService.userName).subscribe((user)=>{
        this.restService.cartOfUser(user.emailId).subscribe((data)=>{
          this.cartItems=data;
          this.cart=new Cart();
          this.cart.items=this.cartItems;
        })
      })
      this.cart=this.cartService.getCart();
    }
  }

  getProductPrice(cartItem:CartItem):number{
    return this.cartService.getPrice(cartItem);
  }

  getTotalPrice(cart_items:CartItem[]):number{
    return this.cartService.totalPrice(cart_items);
  }

  removeFromCart(cartItem:CartItem){
    this.cartService.removeFromCart(cartItem.product.id);
    this.cart=this.cartService.getCart();
  }
  changeQuantity(cartItem:CartItem,quantityInstring:string){
    const quantity=parseInt(quantityInstring);
    this.cartService.changeQuantity(cartItem.product.id,quantity);
    // this.setCart();
    this.cart=this.cartService.getCart();
  }
  // setCart(){
  //   if(this.productService.guestId==0){
  //     this.cart=this.cartService.getCart();
  //   }
  //   else{
  //     this.restService.getCustomerByUsername(this.userService.userName).subscribe((user)=>{
  //       this.restService.cartOfUser(user.emailId).subscribe((data)=>{
  //         this.cartItems=data;
  //         this.cart=new Cart();
  //         this.cart.items=this.cartItems;
  //         console.log(this.cart);
  //       })
  //     })
  //   }
  // }

  checkout(){
    this.checked=true;
  }

  onItemChange(value: any){
    this.paymentOption=value.target.value;
 }

  placeOrder(){
    var date = new Date();
    date.setDate(date.getDate() + 7);
    if(this.productService.guestId==1){
      this.message="Order Placed !!"
      this.restService.getCustomerByUsername(this.userService.userName).subscribe((user)=>{
        this.restService.placeOrder(user.emailId,this.paymentOption,date).subscribe((data)=>{})
      })
      setTimeout(()=>{
        this.router.navigate(['my-orders']);
      },2000)
    }
    else{
      this.message="Please Login First !!";
    }
    alert(this.message);
  }
}
