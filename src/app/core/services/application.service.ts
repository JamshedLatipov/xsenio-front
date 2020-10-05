import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CounterResponse } from '../models/counter.model';
import { LoginRequest, LoginResponse } from '../models/login.model';

@Injectable()
export class ApplicationService {
  constructor(private _http: HttpClient) { }

  getCounter(): Observable<CounterResponse> {
    return this._http.get<CounterResponse>('/api/');
  }

  incrementCounter(): Observable<CounterResponse> {
    return this._http.post<CounterResponse>('/api/', null);
  }
}
