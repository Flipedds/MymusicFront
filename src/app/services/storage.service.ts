import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  setItem(key : string, value: boolean): void{
    localStorage.setItem(key, String(value));
  }

  removeItem(key: string): void{
    localStorage.removeItem(key);
  }
}
