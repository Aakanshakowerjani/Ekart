import { Injectable } from '@angular/core';

import { baseURL } from './config';

@Injectable()
export class InformationService {

  constructor() { }

  signUpBaseUrl=`${baseURL}/Ekart/customer-api/register`;
  loginBaseUrl=`${baseURL}/Ekart/customer-api/login`;
  getAllProducts=`${baseURL}/Ekart/product-api/products`;
  getProductByName=`${baseURL}/Ekart/product-api/search-product/`;
  getCustomerByUsername=`${baseURL}/Ekart/customer-api/customer/`;
  updateUserDetails=`${baseURL}/Ekart/customer-api/update/`;
  updateAddress=`${baseURL}/Ekart/customer-api/update-address/`;
  addToCart=`${baseURL}/Ekart/customer-api/customercarts/add-product`;
  changeQuantity=`${baseURL}/Ekart/customercart-api/customer/`;
  cartOfUser=`${baseURL}/Ekart/customercart-api/customer/`;
  cartCount=`${baseURL}/Ekart/customercart-api/`;
  removeFromCart=`${baseURL}/Ekart/customercart-api/customer/`;
  placeOrder=`${baseURL}/Ekart/customerorder-api/place-order`;
  viewOrders=`${baseURL}/Ekart/customerorder-api/customer/`;
}
