import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Product } from 'src/app/shared/models/Product';
import { ProductService } from '../products/product.service';
import { ProfileService } from '../profile/profile.service';
import { UsernameService } from '../username.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart=new Cart();
  cartItems!:CartItem[];
  message!: string;
  recieved!: boolean;
  errorrecieved!: boolean;

  constructor(private productService: ProductService, private restService: RestService,
    private userService: UsernameService,private router:Router){}

  getPrice(cartItem:CartItem):number{
    return cartItem.product.offerPrice* cartItem.quantity;
  }

  totalPrice(cart_items:CartItem[]):number{
    let totalPrice=0;
    cart_items.forEach(item=>{
        totalPrice+=this.getPrice(item);
    });
    return totalPrice;
  }

  addtoCartGuest(product:Product):void{
    let cartItem=this.cart.items.find(item=>item.product.id === product.id);
      if(cartItem){
        this.changeQuantity(product.id,cartItem.quantity+1);
      }
      else{
        this.cart.items.push(new CartItem(product));
      }
  }
  
  addtoCart(product:Product):string{
      let cartItem=this.cart.items.find(item=>item.product.id === product.id);
      if(cartItem){
        this.changeQuantity(product.id,cartItem.quantity+1);
      }
      else{
        this.cart.items.push(new CartItem(product));
      }
    if(this.productService.guestId==1){
      this.restService.getCustomerByUsername(this.userService.userName).subscribe((user)=>{
        this.restService.addToCart(product.id,user.emailId).subscribe({
          next: (response) => {
            this.recieved= true;
            this.router.navigateByUrl('/cart'); 
          },
          error: (error:string)=> {
            this.message= error;
            this.errorrecieved= true;
          }
        }); 
      });
    }
    else{
      this.router.navigateByUrl('/cart'); 
    }
    return "Product added successfully";
  }

  removeFromCartGuest(productId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.product.id != productId);
  }

  removeFromCart(productId:number):void{
    this.cart.items=this.cart.items.filter(item=>item.product.id != productId);
    if(this.productService.guestId==1){
      this.restService.getCustomerByUsername(this.userService.userName).subscribe((user)=>{
        this.restService.removeFromCart(user.emailId,productId).subscribe((data)=>{})
      })
    }
  }
  changeQuantity(productId:number,quantity:number){
    let cartItem=this.cart.items.find(item=>item.product.id===productId);
    if(!cartItem) return;
    cartItem.quantity=quantity;
    if(this.productService.guestId==1){
      this.restService.getCustomerByUsername(this.userService.userName).subscribe((user)=>{
        this.restService.changeQuantity(productId,user.emailId,quantity).subscribe((data)=>{ 
        });
      })
    }
  }
  getCart():Cart{
    return this.cart;
  }
  getCartCount(){
    return this.cart.items.length;
  }
  emptyCart(){
    this.cart.items.forEach(item=>{
      this.removeFromCart(item.product.id);
    })
  }
  emptyCartGuest(){
    this.cart.items.forEach(item=>{
      this.removeFromCartGuest(item.product.id);
    })
  }
}
