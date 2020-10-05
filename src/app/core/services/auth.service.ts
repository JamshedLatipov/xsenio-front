import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { LoginRequest, LoginResponse } from '../models/login.model';
import { UserState } from '../models/user.model';

@Injectable()
export class AuthService {
  isAuthenticate$: BehaviorSubject<UserState> = new BehaviorSubject({ loggedIn: false, token: null });

  constructor(private _http: HttpClient) { }

  login(body: LoginRequest): Observable<LoginResponse> {
    return this._http.post<LoginResponse>('/api/auth/login', body);
  }
}
