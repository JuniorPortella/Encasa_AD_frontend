import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { LoginService } from './login.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

	private loginService = inject(LoginService)

	intercept(req: HttpRequest<any>, next: HttpHandler) {
		
		let nextReq = req.clone()

		if (!nextReq.headers.has('Authorization')){
			nextReq = nextReq.clone({setHeaders: {Authorization : `Bearer ${this.loginService.getToken()}`}})			
		}

		return next.handle(nextReq)
	}

}