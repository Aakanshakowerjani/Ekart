import { Injectable } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Product } from '../../shared/models/Product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  guestId=0;
  productList!:Product[];

  constructor(private restService: RestService) { 
    this.restService.getAllProducts().subscribe((products)=>{
    this.productList=products;
  });}

  getProductById(displayName:string):Product{
    return this.getAll().find(product => product.displayName == displayName)!;
  }
  getProductId(id:number){
  return this.getAll().find(product => product.id==id)!;
  }
  getAll():Product[]{
    
      return this.productList;

  }
  }