import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from 'src/shared/api.service';
import { environment } from 'src/environments/environment';



@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private serverUrl=environment.serverUrl;

  constructor(private authService:ApiService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if user is logged in and request is to the api url
    console.log("abc")
 

    const accessToken = localStorage.getItem('token');
 
    const isApiUrl = request.url.startsWith(this.serverUrl);
    if (accessToken && isApiUrl) {
        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${accessToken}`
            }
        });
    }

    return next.handle(request);
  }
}