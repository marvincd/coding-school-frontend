import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class CustomInterceptor implements HttpInterceptor {

  
  constructor(private auth: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    debugger;
    const token = this.auth.getToken();
    const newCloneRequest = request.clone({
      setHeaders:{
        Authorization: `Bearer ${token}`
      }
    })
    return next.handle(newCloneRequest);
  }
}
