import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpEvent } from '@angular/common/http';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  intercept(req: HttpRequest<any>,
    next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("id_token");

    if (idToken && this.validateRequest(req.url)) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          idToken)
      });
      return next.handle(cloned);
    }
    else {
      this.router.navigate(['/login']);
      return next.handle(req);
    }
  }

  validateRequest(url: string): boolean {
    return !url.includes("/auth/signin") || !url.includes("/auth/singup");
  }
}