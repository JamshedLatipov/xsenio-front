import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor, HttpRequest,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { LocalStorageService } from '../services/localstorage.service';
import { LocalStorageEnum } from '../enums/localstorage.enum';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private _localStorageService: LocalStorageService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._localStorageService.getItem(LocalStorageEnum.UserToken);
    let headers = {};

    if (!!token) {
      headers = { Authorization: `Bearer ${token}` };
    }

    req = req.clone({
      setHeaders: headers
    });

    return next.handle(req);
  }

}
