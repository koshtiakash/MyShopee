import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserregComponent } from './userreg/userreg.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavComponent } from './nav/nav.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegsucessComponent } from './regsucess/regsucess.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { ViewuserComponent } from './viewuser/viewuser.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserregComponent,
    AdminloginComponent,
    NavComponent,
    HomepageComponent,
    RegsucessComponent,
    FooterComponent,
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    PaymentComponent,
    OrderplacedComponent,
    ProductComponent,
    ProductItemComponent,
    ViewuserComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
