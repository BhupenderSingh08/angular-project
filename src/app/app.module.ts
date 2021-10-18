import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { OtpComponent } from './otp/otp.component';
import { AuthInterceptor } from './auth.interceptor';
import { IndexComponent } from './index/index.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OtpComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS,
       useClass: AuthInterceptor, 
       multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
