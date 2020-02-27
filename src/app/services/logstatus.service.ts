import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogstatusService {
 private status:boolean=false;
  constructor() { }
  getStatus(){
    return this.status;
  }
  updateStatus(status:boolean):void{
    this.status=status;
  }
}
