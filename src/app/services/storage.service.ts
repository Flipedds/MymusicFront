import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class StorageService {
  constructor(){}
  private logincondition: boolean = false;
  setCondition(): void{
    this.logincondition = true;
  }

  removeCondition(): void{
    this.logincondition = false;
  }

  getCondition(): boolean{
    return this.logincondition;
  }
}
