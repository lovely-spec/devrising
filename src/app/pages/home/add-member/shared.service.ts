import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  filterdata: string;
  number:string;
  //personal details 
  First_name:string;
  Last_name:string;
  Father_name:string;
  Husband_wife_name:string;
  D_O_B:string;
  Marital_status:string;
  Occupation:string;
  Email:string;
  gender:string;
  title:string;
  // address details 
  village_house_town:string;
  p_o:string;
  panchayat:string;
  tehsil:string;
  distt:string;
  pin:string;
  P_village_house_town:string;
  P_p_o:string;
  P_panchayat:string;
  P_tehsil:string;
  P_distt:string;
  P_pin:string;
  mid:string;
  fd:boolean;
  rd:boolean;
  constructor() { }
  setfd(data){
  this.fd=data
  }
  getfd(){
    return this.fd
  }
  setmid(data){
  this.mid=data
  }
  getmid(){
    return this.mid
  }
  setrd(data){
    this.rd=data
  }
  getrd(){
        return this.rd
  }
  setdata(data){
    this.filterdata=data
  }
  setnumber(data){
    this.number=data
  }
  getnumber(){
    return this.number
  }
  //personal details 
  setfname(data){
    this.First_name=data
  }
  getfname(){
    return this.First_name
  }
  setlname(data){
    this.Last_name=data
  }
  getlname(){
    return this.Last_name
  }
  setftname(data){
    this.Father_name=data
  }
  getftname(){
    return this.Father_name
  }
  sethwname(data){
    this.Husband_wife_name=data
  }
  gethwname(){
    return this.Husband_wife_name
  }
  setdob(data){
    this.D_O_B=data
  }
  getdob(){
    return this.D_O_B
  }
  setms(data){
    this.Marital_status=data
  }
  getms(){
    return this.Marital_status
  }
  setoc(data){
    this.Occupation=data
  }
  getoc(){
    return this.Occupation
  }
  setemail(data){
    this.Email=data
  }
  getemail(){
    return this.Email
  }
  setgender(data){
    this.gender=data
  }
  getgender(){
    return this.gender
  }
  settitle(data){
    this.title=data
  }
  gettitle(){
    return this.title
  }
  //address{} details

  setvht(data){
    this.village_house_town=data
  }
  getvht(){
    return this.village_house_town
  }
  setpo(data){
    this.p_o=data
  }
  getpo(){
    return this.p_o
  }
  setpan(data){
    this.panchayat=data
  }
  getpan(){
    return this.panchayat
  }
  setteh(data){
    this.tehsil=data
  }
  getteh(){
    return this.tehsil
  }
  setdistt(data){
    this.distt=data
  }
  getdistt(){
    return this.distt
  }
  setpin(data){
    this.pin=data
  }
  getpin(){
    return this.pin
  }
  setpvht(data){
    this.P_village_house_town=data
  }
  getpvht(){
    return this.P_village_house_town
  }
  setppo(data){
    this.P_p_o=data
  }
  getppo(){
    return this.P_p_o
  }
  setppan(data){
    this.P_panchayat=data
  }
  getppan(){
    return this.P_panchayat
  }
  setpteh(data){
    this.P_tehsil=data
  }
  getpteh(){
    return this.P_tehsil
  }
  setpdiss(data){
    this.P_distt=data
  }
  getpdiss(){
    return this.P_distt
  }
  setppin(data){
    this.P_pin=data
  }
  getppin(){
    return this.P_pin
  }  
  getdata(){
    return this.filterdata 
  }
}
