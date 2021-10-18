import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { IndexComponent } from './index/index.component';
import { OtpComponent } from './otp/otp.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'otp',
    component:OtpComponent
  },
  {
    path:'index',
    component:IndexComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
