import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    
   

  link = "https://limoapi.mobilytedev.com/api/";


  constructor(private http: HttpClient) { }

  postData(data:any) {
    return this.http.post<any>(this.link+"login-otp",data)
    .pipe( map((res:any)=>{
      return res;

    }) )

}
postOtp(data:any) {
  return this.http.post<any>("https://limoapi.mobilytedev.com/api/login",data)
  .pipe( map((res:any)=>{
    return res;
  }) )
}


logoutUser(){
  return this.http.post<any>(this.link+"logout",{})
  .pipe( map((res:any)=>{
    return res;

  }) )

}


}