import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/products/product.service';
import { Product } from '../shared/models/Product';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:Product[]=[];
  constructor(private productService:ProductService, private route:ActivatedRoute, private restService: RestService) {  }

  ngOnInit(): void {
    this.restService.getAllProducts().subscribe((productList)=>{
      this.route.params.subscribe(params=>{
        if(params['searchTerm'])
          this.products=productList.filter(product=>product.displayName.toLowerCase().includes(params['searchTerm'].toLowerCase()));
        else{
        console.log(productList);
        this.products=productList;
        }
      })
    })

  }

}
