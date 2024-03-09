import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products/product.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  guest!:number;
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.guest=this.productService.guestId;
  }

}
