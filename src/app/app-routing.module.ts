import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { UserregComponent } from './userreg/userreg.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegsucessComponent } from './regsucess/regsucess.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PaymentComponent } from './payment/payment.component';
import { OrderplacedComponent } from './orderplaced/orderplaced.component';


const routes: Routes = [
  {
    path: '',
    redirectTo:'/homepage',
    pathMatch: 'full'
  },
 
  {
    path:'login-page',
    component: LoginPageComponent
  },
  
  {
    path:'userreg',
    component: UserregComponent
  },

  {
    path:'adminlogin',
    component: AdminloginComponent
  },
  {
    path:'homepage',
    component: HomepageComponent
  },
  {
    path:'regsucess',
    component: RegsucessComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path:'checkout',
    component: CheckoutComponent
  },
  {
    path:'payment',
    component: PaymentComponent
  },
  {
    path:'orderplaced',
    component: OrderplacedComponent
  }
  
 
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
