import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { UserregComponent } from './userreg/userreg.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { RegsucessComponent } from './regsucess/regsucess.component';

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
  }
 
];

@NgModule({
  imports: [CommonModule,RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
