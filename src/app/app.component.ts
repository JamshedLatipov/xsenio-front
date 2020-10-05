import { Component } from '@angular/core';
import { LocalStorageService } from './core/services/localstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _localStorageService: LocalStorageService) {
  }
}
