import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthserviceService } from './authservice.service';
import { take, exhaustMap } from 'rxjs/operators';


@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
constructor(private authService: AuthserviceService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        return this.authService.user.pipe(
            take(1),
            exhaustMap(user => {
                if(!user) {
                    return next.handle(req);
                }
                const modifiedRequest = req.clone({
                    headers: req.headers.set('Authorization', "Bearer " + user.token)
                });
                return next.handle(modifiedRequest);
            })
        )
    }
}