import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RatingModule } from 'ng-starrating';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ProfileComponent } from './profile/profile.component';
import { MyordersComponent } from './myorders/myorders.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { NotificationComponent } from './notification/notification.component';
import { ProductComponent } from './product/product.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OpenOrderComponent } from './myorders/open-order/open-order.component';
import { CloseOrderComponent } from './myorders/close-order/close-order.component';
import { CancelledOrderComponent } from './myorders/cancelled-order/cancelled-order.component';
import { ReturnedOrderComponent } from './myorders/returned-order/returned-order.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RestService } from './rest.service';
import { SignupService } from './signup/signup.service';
import { InformationService } from './information.service';
import { LoginService } from './login/login.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    ProfileComponent,
    MyordersComponent,
    WishlistComponent,
    NotificationComponent,
    ProductComponent,
    NotFoundComponent,
    OpenOrderComponent,
    CloseOrderComponent,
    CancelledOrderComponent,
    ReturnedOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RatingModule
  ],
  providers: [
    RestService,
    SignupService,
    InformationService,
    LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
