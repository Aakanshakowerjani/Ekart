import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { RestService } from '../rest.service';
import { CartService } from '../services/cart/cart.service';
import { ProductService } from '../services/products/product.service';
import { UsernameService } from '../services/username.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartCount!:number;
  searchTerm:string="";
  constructor(private route:ActivatedRoute , private router:Router,private productService:ProductService,private cartService:CartService, 
    private restService:RestService,private userService:UsernameService) { 
    if(this.productService.guestId==1){
      this.restService.getCustomerByUsername(this.userService.userName).subscribe((user)=>{
        this.restService.cartCount(user.emailId).subscribe((count)=>{
          this.cartCount=count;
        })
      })
    }else{
      this.cartCount=this.cartService.getCartCount();
    }
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      if(params['searchTerm'])
      this.searchTerm=params['searchTerm'];
    })
  }

  isGuest(){
    if(!this.productService.guestId)
      return true
    else
      return false
  }

  search():void{
    if(this.searchTerm)
    this.router.navigateByUrl('/home/'+this.searchTerm);
  }
  logoutButton(){
    this.productService.guestId=0;
    localStorage.removeItem('user');
    this.cartService.emptyCart();
  }
}
