import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';
import { ProductService } from '../services/products/product.service';
import { UsernameService } from '../services/username.service';
import { Orders } from '../shared/models/Orders';

@Component({
  selector: 'app-myorders',
  templateUrl: './myorders.component.html',
  styleUrls: ['./myorders.component.css']
})
export class MyordersComponent implements OnInit {

  guest!:number;
  orders!:Orders[];
  constructor(private router:Router,private productService:ProductService, private userService: UsernameService, private restService: RestService) { 
    if(this.productService.guestId==1){
      this.restService.getCustomerByUsername(this.userService.userName).subscribe((user)=>{
        this.restService.viewOrders(user.emailId).subscribe((data)=>{
          this.orders=data;
        })
      })
    }
  }

  ngOnInit(): void {
    this.guest=this.productService.guestId;
  }
  openOrder(){
    this.router.navigateByUrl('my-orders/open-order');
  }
  closeOrder(){
    this.router.navigateByUrl('my-orders/close-order');
  }
  cancelOrder(){
    this.router.navigateByUrl('my-orders/cancel-order');
  }
  returnOrder(){
    this.router.navigateByUrl('my-orders/return-order');
  }
}
