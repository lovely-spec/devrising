import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberSavingResponse } from '../../../../providers/Models/MemberSaving';
import { NavParams, NavController, PopoverController, Platform } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { UserResponse } from '../../../../providers/Models/UserDetails';
import {SharedService } from '../add-member/shared.service';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-schemes',
  templateUrl: './schemes.page.html',
  styleUrls: ['./schemes.page.scss'],
})
export class SchemesPage implements OnInit {
  public UserResponse: UserResponse;
  savingdata: any;
  SavingDetails: any = [];
  MemberSavingResponse: MemberSavingResponse;
  schemesdetails: any= [];
  rdschemesdetails: any= [];
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
  fd:boolean;
  rd:boolean;
  ionViewDidEnter() {
    
    this.provider.rd_schemes().subscribe(data=>{
      this.rdschemesdetails = this.provider.rd_scheme_details(data);
      console.log('rdschemes',this.rdschemesdetails);
    });
    this.provider.fd_schemes().subscribe(data=>{
      this.schemesdetails = this.provider.scheme_details(data);
      console.log('fdschemes',this.schemesdetails);
    });
    var fd = this.shared.getfd();
    var rd = this.shared.getrd();
    this.rd = rd;
    this.fd = fd;
    console.log('rd',rd)
    console.log('fd',fd)
  }

  ngOnInit() {
  }
  next(){
    var fd = this.shared.getfd();
    if (fd == true){
      let navigationExtras: NavigationExtras = {
        
      };
      this.router.navigate(['/dashboard/home/fdview/add-new-fd'], navigationExtras);}
  }
  back(){
    var fd = this.shared.getfd();
    var rd = this.shared.getrd();
    if (fd == true){
      let navigationExtras: NavigationExtras = {
        
      };
      // this.router.navigate(['/dashboard/home/fdview/add-new-fd'], navigationExtras);
    }
      if (rd == true){
        let navigationExtras: NavigationExtras = {
          
        };
        this.router.navigate(['/dashboard/home/rdview/add-new-rd'], navigationExtras);}
      else{
        let navigationExtras: NavigationExtras = {
        
        };
        this.router.navigate(['/dashboard/home/fdview/add-new-fd/'], navigationExtras);}
      
  }

}
