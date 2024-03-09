import { Injectable } from '@angular/core';

import {
  HttpClient,
  HttpResponse,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { SignUp } from './signup/signup';
import { Login } from './login/login';
import { Product } from './shared/models/Product';
import { InformationService } from './information.service';
import { Profile } from './shared/models/Profile';
import { Cart } from './shared/models/Cart';
import { CartItem } from './shared/models/CartItem';
import { Orders } from './shared/models/Orders';

@Injectable()
export class RestService {
  url!:string;
  constructor(private http:HttpClient, private informationservice:InformationService) { }

  post(url: string,data: SignUp|Login){
    console.log(data);
    const options={headers:{"Content-Type":"application/json"}};
    return this.http.post(url,data,options);
  }
  getAllProducts(){
    return this.http.get<Product[]>(this.informationservice.getAllProducts);
  }

  getProductByName(displayName:string){
    this.url=this.informationservice.getProductByName+`${displayName}`;
    return this.http.get<Product>(this.url);
  }

  getCustomerByUsername(username:string){
    this.url=this.informationservice.getCustomerByUsername+`${username}`;
    return this.http.get<Profile>(this.url);
  }

  updateUserDetails(user:Profile,email:String){
    this.url=this.informationservice.updateUserDetails+`${email}`;
    const options=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(this.url,user,{headers:options,observe:'body',responseType:'text'});
  }

  updateAddress(address:string,email:string){
    this.url=this.informationservice.updateAddress+`${email}`;
    const options=new HttpHeaders({'Content-Type':'text/plain'});
    return this.http.put(this.url,address,{headers:options,observe:'body',responseType:'text'})
  }

  addToCart(productId:number,email: string){
    this.url=this.informationservice.addToCart;
    const options=new HttpHeaders({'Content-Type':'application/json'});
    var request={
      "customerEmailId": email,
      "cartProducts": [
          {
              "product": {
                  "id": productId
              },
              "quantity": 1
          }
      ]
  }
    return this.http.post(this.url,request,{headers:options,observe:'body',responseType:'text'}).pipe(tap((data:any)=> console.log(data)),

    catchError(this.handleError));
  }

  changeQuantity(productId:number,email:string,quantity:number){
    this.url=this.informationservice.changeQuantity+`${email}`+"/product/"+`${productId}`;
    const options=new HttpHeaders({'Content-Type':'application/json'});
    return this.http.put(this.url,quantity,{headers:options,observe:'body',responseType:'text'});
  }

  cartOfUser(email:string){
    this.url=this.informationservice.cartOfUser+`${email}`+"/products";
    return this.http.get<CartItem[]>(this.url);
  }

  cartCount(email:string){
    this.url=this.informationservice.cartCount+`${email}`+"/cartcount";
    return this.http.get<number>(this.url);
  }

  removeFromCart(email:string,productId:number){
    this.url=this.informationservice.removeFromCart+`${email}`+"/product/"+`${productId}`;
    return this.http.delete(this.url,{responseType:'text'});
  }

  placeOrder(email:string,paymentOption:string, date:Date){
    this.url=this.informationservice.placeOrder;
    const options=new HttpHeaders({'Content-Type':'application/json'});
    var request={
      "customerEmailId" : email,
      "paymentThrough": paymentOption,
      "dateOfDelivery": date
  }
    return this.http.post(this.url,request,{headers:options,observe:'body',responseType:'text'});
  }

  viewOrders(email:string){
    this.url=this.informationservice.viewOrders+`${email}`+"/orders";
    return this.http.get<Orders[]>(this.url);
  }

  private handleError(err:HttpErrorResponse):Observable<string>{

    let errMsg='';

    if(err.error instanceof Error){

      console.log('An error occured',err.error.message);

      errMsg= err.error.message;

    }

    else{

      console.log(`Backend returned code ${err.status}`);

      errMsg= err.error;

    }

    return throwError(()=>errMsg);

  }
}

