import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyordersComponent } from './myorders/myorders.component';
import { NotificationComponent } from './notification/notification.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ProductComponent } from './product/product.component';
import { OpenOrderComponent } from './myorders/open-order/open-order.component';
import { ReturnedOrderComponent } from './myorders/returned-order/returned-order.component';
import { CloseOrderComponent } from './myorders/close-order/close-order.component';
import { CancelledOrderComponent } from './myorders/cancelled-order/cancelled-order.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'cart', component:CartComponent},
  {path:'profile', component:ProfileComponent},
  {path:'notification', component:NotificationComponent},
  {path:'wishlist', component:WishlistComponent},
  {path:'my-orders', component:MyordersComponent},
  {path:'home/:searchTerm',component:HomeComponent},
  {path : 'home/:id/details',component:ProductComponent},
  {path:'my-orders/open-order',component:OpenOrderComponent},
  {path:'my-orders/close-order',component:CloseOrderComponent},
  {path:'my-orders/return-order',component:ReturnedOrderComponent},
  {path:'my-orders/cancel-order',component:CancelledOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
