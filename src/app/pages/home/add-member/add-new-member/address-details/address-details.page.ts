import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.page.html',
  styleUrls: ['./address-details.page.scss'],
})
export class AddressDetailsPage implements OnInit {

  constructor() { }
  addressRadio:string;
  show_detail:boolean;

  ngOnInit() {
    this.show_detail = false;
    }
    showform(f){
      if(f == 2){
        this.show_detail = true;
      }else{
        this.show_detail = false
      } 
    }
}
