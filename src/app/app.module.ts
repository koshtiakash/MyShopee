import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { UserregComponent } from './userreg/userreg.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { NavComponent } from './nav/nav.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product/product-item/product-item.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegsucessComponent } from './regsucess/regsucess.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { FooterComponent } from './footer/footer.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart/cart-item/cart-item.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    UserregComponent,
    AdminloginComponent,
    NavComponent,
    ProductComponent,
    ProductItemComponent,
    HomepageComponent,
    RegsucessComponent,
    FooterComponent,
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    PaymentComponent,
    OrderplacedComponent

    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

    
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})

export class AppModule { }
