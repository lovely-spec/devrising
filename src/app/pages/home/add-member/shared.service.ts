import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  filterdata: string;
  number:string;
  constructor() { }
  setdata(data){
    this.filterdata=data
  }
  setnumber(data){
    this.number=data
  }
  getnumber(){
    return this.number
  }
  getdata(){
    return this.filterdata 
  }
}
