import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LocalStorageEnum } from 'src/app/core/enums/localstorage.enum';

import { AuthService } from 'src/app/core/services/auth.service';
import { LocalStorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject();
  loginForm: FormGroup;

  constructor(private _authService: AuthService, private _router: Router, private _localStorageService: LocalStorageService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      login: new FormControl('admin', { validators: [Validators.required] }),
      password: new FormControl('1', { validators: [Validators.required] }),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  submit() {
    if (this.loginForm.valid) {
      this._authService.login(this.loginForm.value).pipe(takeUntil(this.destroy$)).subscribe(data => {
        this._authService.isAuthenticate$.next({ token: data.body.token, loggedIn: true });
        this._localStorageService.setItem(LocalStorageEnum.UserToken, data.body.token);
        this._router.navigate(['home']);
      }, (err) => {
        this._authService.isAuthenticate$.next({ token: null, loggedIn: false });
      });
    }
  }

}
