import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemberSavingResponse } from '../../../../../../providers/Models/MemberSaving';
import { NavParams, NavController, PopoverController, Platform, LoadingController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { UserResponse } from '../../../../../../providers/Models/UserDetails';
import {SharedService } from '../../../add-member/shared.service';
import { NavigationExtras, Router } from '@angular/router';
import { TouchSequence } from 'selenium-webdriver';
@Component({
  selector: 'app-add-new-rd',
  templateUrl: './add-new-rd.page.html',
  styleUrls: ['./add-new-rd.page.scss'],
})
export class AddNewRdPage implements OnInit {
  public UserResponse: UserResponse;
  savingdata: any;
  SavingDetails: any ;
  MemberSavingResponse: MemberSavingResponse;
  schemesdetails: any= [];
  minordetails: any= [];
  optionValue: any;
  scheme: any;
  amount:number;
  is_nominee:string = '';
  n_name:string = '';
  rel_nomineee:string = '';
  a_nominee:string = '';
  is_minor:string = '';
  is_saving:string = '';
  saving_id:string ;
  minor:string = '';
  joint:string = '';
  jac:string = '';
  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public shared: SharedService,
    public router: Router,
    private provider: ApihelperProvider,
    public loadingController : LoadingController,
  ) { }
  addressRadio:string;
  show_detail:boolean;
  form:boolean;
  rd:boolean;
  fd:boolean;
  sch:any;
  j:boolean;
  ionViewDidEnter() {
    
    this.provider.UserPanel().subscribe(data=>{
      this.UserResponse = this.provider.User_details(data);
      if(this.UserResponse){
        this.SavingDetails = []
        this.SavingDetails = this.UserResponse.Saving;
        
      }
      console.log('saving',this.SavingDetails)
    });
    this.provider.rd_schemes().subscribe(data=>{
      this.schemesdetails = this.provider.rd_scheme_details(data);
      console.log('schemes',this.schemesdetails);
    });
    this.provider.minor().subscribe(data=>{
      this.minordetails = this.provider.minor_details(data);
      console.log('minors',this.minordetails);
    });
    this.shared.setrd(this.rd);
    this.sch = this.scheme;
  }
  ngOnInit() {
    this.show_detail = false;
    this.form = false;
    this.rd = true;
    this.fd = false
    
  }
  onChange(){
    console.log(this.scheme);
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
  jointac(r){
    if(r == 2){
      this.j = true;
    }else{
      this.j = false;
    } 
  }
  add_minor(){
    this.shared.setrd(this.rd);
    console.log(this.rd);
    let navigationExtras: NavigationExtras = {
        };
        this.router.navigate(['/dashboard/home/rdview/add-new-rd/add-minor'], navigationExtras);
  }
  schemes(){
    this.shared.setrd(this.rd);
    this.shared.setfd(this.fd);
    let navigationExtras: NavigationExtras = {
    };
    this.router.navigate(['/dashboard/home/rdview/add-new-rd/schemes'], navigationExtras);

  }
  async openrd(){
    const loading = await this.loadingController.create({
      message: 'Please Wait',
      translucent: true,
    });
  var scheme = this.scheme;
  var amount = this.amount;
  var is_nominee =  this.is_nominee;
  var n_name = this.n_name;
  var rel_nomineee = this.rel_nomineee;
  var a_nominee = this.a_nominee;
  var is_minor = this.is_minor;
  var minor_id = this.minor;
  var is_saving= this.is_saving;
  var saving_id= this.saving_id;
  var nominee_type = 'RdAccount';
  var nominee = this.show_detail;
  var minor = this.form;
  var j = this.j;
    var joint = this.joint;
    var jac = this.jac;
  console.log('res1', scheme,amount,is_nominee,is_minor,n_name,rel_nomineee,a_nominee); 
  if (scheme==null||scheme==''|| amount==null||is_nominee==null||is_nominee==''||is_minor==null||is_minor==''){
    this.provider.show_alert('All fields required ') 
    console.log('nominee', nominee,); 
  }else{ 
  
  if (nominee == true && minor == true ){
  
    if (n_name==null||n_name==''|| rel_nomineee==null||rel_nomineee==null||a_nominee==''||a_nominee==null || minor_id==null||minor_id==''){
      this.provider.show_alert('Please fill Nominee And Minor details')
    }else{
      await loading.present();
    this.provider.createrd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving_id).subscribe(data=>{
      console.log('response',data)
      if(data['status'] == true){
        loading.dismiss();
        let navigationExtras: NavigationExtras = {
          
        };
        this.router.navigate(['/dashboard/home/rdview/add-new-rd/rd-open-successfully'], navigationExtras);
  
    }else{
      loading.dismiss();
    this.provider.show_alert(data['message'])
  
    }
  })
    }
  }else if (nominee == true  ){
  
    if (n_name==null||n_name==''|| rel_nomineee==null||rel_nomineee==null||a_nominee==''||a_nominee==null){
      this.provider.show_alert('Please fill Nominee details')
    }else{
      await loading.present();
    this.provider.createrd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving_id).subscribe(data=>{
      console.log('response',data)
      if(data['status'] == true){
        loading.dismiss();
        let navigationExtras: NavigationExtras = {
          
        };
        this.router.navigate(['/dashboard/home/rdview/add-new-rd/rd-open-successfully'], navigationExtras);
  
    }else{
      loading.dismiss();
    this.provider.show_alert(data['message'])
  
    }
  })
    }
  }else if( minor == true ){
  
    if (minor_id==null||minor_id==''){
      this.provider.show_alert('Please fill Minor details')
    }else{
      await loading.present();
    this.provider.createrd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving_id).subscribe(data=>{
      console.log('response',data)
      if(data['status'] == true){
        loading.dismiss();
        let navigationExtras: NavigationExtras = {
          
        };
        this.router.navigate(['/dashboard/home/rdview/add-new-rd/rd-open-successfully'], navigationExtras);
  
    }else{
      loading.dismiss();
    this.provider.show_alert(data['message'])
  
    }
  })
    }
  }else{
    await loading.present();
    this.provider.createrd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving_id).subscribe(data=>{
      console.log('response',data)
      if(data['status'] == true){
        loading.dismiss();
        let navigationExtras: NavigationExtras = {
          
        };
        this.router.navigate(['/dashboard/home/rdview/add-new-rd/rd-open-successfully'], navigationExtras);
  
    }else{
      loading.dismiss();
    this.provider.show_alert(data['message'])
  
    }
  })
  }
 
    
//     this.provider.createrd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving_id).subscribe(data=>{
//     console.log('response',data)
//     this.provider.presentLoading();
//     if(data['status'] == true){
//       let navigationExtras: NavigationExtras = {
        
//       };
//       this.router.navigate(['/dashboard/home/rdview/add-new-rd/rd-open-successfully'], navigationExtras);

//   }else{
//   this.provider.show_alert(data['message'])

//   }
// })

}

}
  ngAfterViewInit() {
    
    $("#cal").click(function(){
    
     var amount = $('.amount').val();
    var scheme = $('.scheme').val();
    var first = 59;
    var second = 60;
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
          var amt = amount as number;
           
          
          console.log('res',res);
          for (let i = 0; i < ten+1; i+=3){
            // var res2 =  (amount*i) ;
            console.log('res', i)
            var res2 = amt*i;
            var res3 = (res/100)*res2;
            
            console.log('res2', res3);
            
          }
       }
       if (scheme == second ){
         var int = 8.0;
         var ten = 24;
       var cal = ten/3;
       var res = int/cal;
       }
      
    }
   
  });
  $("#scheme").click(function(){
    var scheme = $('.scheme').val();
    console.log(scheme);
  });
}
}
