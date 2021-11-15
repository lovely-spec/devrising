import { Component, OnInit, ViewChild } from '@angular/core';
import { AddNewMemberPage } from '../add-new-member.page';
import { AddNewMemberService } from '../add-new-member.service';

@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.page.html',
  styleUrls: ['./address-details.page.scss'],
})
export class AddressDetailsPage implements OnInit {
  @ViewChild('AddNewMemberPage', {static : false}) filterPanel: AddNewMemberPage;

  constructor(public AddNewMemberService: AddNewMemberService) { }
  addressRadio:string;
  show_detail:boolean;

  ngOnInit() {
    console.log('value received ', this.AddNewMemberService.data);
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
