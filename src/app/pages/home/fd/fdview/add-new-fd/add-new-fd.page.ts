import { Component, OnInit , AfterViewInit } from '@angular/core';
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
  scheme: any;
  amount:string;
  is_nominee:string;
  n_name:string;
  rel_nomineee:string;
  a_nominee:string;
  is_minor:string;
  minor:string;
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
  schemes(){
    this.shared.setfd(this.fd);
    let navigationExtras: NavigationExtras = {
    };
    this.router.navigate(['/dashboard/home/fdview/add-new-fd/schemes'], navigationExtras);

  }
  
  calculate(){
    var amount = this.amount
    var first = 21;
    var second = 24;
    var result1 = '';
    var result2 = '';
    
    if (this.scheme!=null||this.scheme!=''){
      console.log(amount)
       if (this.scheme == first ){
          var int = 8.5;
          var ten = 12;
          var cal = ten/3;
          var res = int/cal;
          var amt = amount;
          console.log(amt);
          // for (let i = 3; i = ten; i+3){
          //   var res2 = amt * i ;
          // }
       }
       if (this.scheme == second ){
         var int = 8.0;
         var ten = 24;
       var cal = ten/3;
       var res = int/cal;
       }
      
    }
    
  }
  ngAfterViewInit() {
    
    $("#cal").click(function(){
    var amount = $('.amount').val();
    var scheme = $('.scheme').val();
    var first = 21;
    var second = 24;
    var result1 = '';
    var result2 = '';
    console.log(amount,scheme)
    if (scheme!=null||scheme!=''){
      console.log(amount)
       if (scheme == first ){
          var int = 8.5;
          var ten = 12;
          var cal = ten/3;
          var res = int/cal;
          var amt = amount;
          console.log('res',res);
          // for (let i = 3; i = ten; i+3){
          //   // var res2 =  (amount*i) ;
          //   console.log('res', res)
          // }
       }
       if (scheme == second ){
         var int = 8.0;
         var ten = 24;
       var cal = ten/3;
       var res = int/cal;
       }
      
    }
   
  });
}
  

}
