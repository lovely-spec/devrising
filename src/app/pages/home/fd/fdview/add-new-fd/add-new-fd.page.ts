import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberSavingResponse } from '../../../../../../providers/Models/MemberSaving';
import { NavParams, NavController, PopoverController, Platform } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { UserResponse } from '../../../../../../providers/Models/UserDetails';
import {SharedService } from '../../../add-member/shared.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-add-new-fd',
  templateUrl: './add-new-fd.page.html',
  styleUrls: ['./add-new-fd.page.scss'],
})
export class AddNewFdPage implements OnInit {
  public UserResponse: UserResponse;
  savingdata: any;
  SavingDetails: any = [];
  MemberSavingResponse: MemberSavingResponse;
  schemesdetails: any= [];
  minordetails: any= [];
  optionValue: any;
  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public shared: SharedService,
    public router: Router,
    private provider: ApihelperProvider,
  ) { }
  addressRadio:string;
  show_detail:boolean;
  form:boolean;
  fd:boolean;
  ionViewDidEnter() {
    this.provider.UserPanel().subscribe(data=>{
      this.UserResponse = this.provider.User_details(data);
      if(this.UserResponse){
        this.SavingDetails = []
        this.SavingDetails = this.UserResponse.Saving;
      }
      console.log('FD',this.SavingDetails)
    });
    this.provider.fd_schemes().subscribe(data=>{
      this.schemesdetails = this.provider.scheme_details(data);
      console.log('schemes',this.schemesdetails);
    });
    this.provider.minor().subscribe(data=>{
      this.minordetails = this.provider.minor_details(data);
      console.log('minors',this.minordetails);
    });
  }

  ngOnInit() {
    this.show_detail = false;
    this.form = false;
    this.fd = true;
  }
  showform(f){
    if(f == 2){
      this.show_detail = true;
    }else{
      this.show_detail = false;
    } 
  }
  showform1(f){
    if(f == 2){
      this.form = true;
    }else{
      this.form = false;
    } 
  }
  add_minor(){
    this.shared.setfd(this.fd);
    console.log(this.fd);
    let navigationExtras: NavigationExtras = {
        };
        this.router.navigate(['/dashboard/home/fdview/add-new-fd/add-minor'], navigationExtras);
  }
  

}
