import { Inject, Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class LocalStorageService {

  private _localStorage: any;

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this._localStorage = _document.defaultView?.localStorage;
  }

  get length(): number {
    return this._localStorage.length;
  }

  clear(): void {
    this._localStorage.clear();
  }

  getItem(key: string): any | null {
    return JSON.parse(this._localStorage.getItem(key));
  }

  key(index: number): string | null {
    return this._localStorage.key(index);
  }

  removeItem(key: string): void {
    this._localStorage.removeItem(key);
  }

  setItem(key: string, value: any): void {
    this._localStorage.setItem(key, JSON.stringify(value));
  }

}
