import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-returned-order',
  templateUrl: './returned-order.component.html',
  styleUrls: ['./returned-order.component.css']
})
export class ReturnedOrderComponent implements OnInit {
  guest!:number;
  constructor(private router:Router,private productService:ProductService) { }

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
