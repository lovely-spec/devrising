import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberSavingResponse } from '../../../../../../providers/Models/MemberSaving';
import { NavParams, NavController, PopoverController, Platform } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { UserResponse } from '../../../../../../providers/Models/UserDetails';

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
  optionValue: any;
  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private provider: ApihelperProvider,
  ) { }
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
  }

  ngOnInit() {
  }
  

}
