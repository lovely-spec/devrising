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
  is_saving:string;
  minor:string;
  joint:string = null;
  jac:string;
  senior:string;
  constructor(
    public platform: Platform,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    public shared: SharedService,
    public router: Router,
    private provider: ApihelperProvider,
  ) { }
  addressRadio:string;
  show_detail:boolean=false;
  show_joint:boolean;
  form:boolean=false;
  fd:boolean;
  resp:boolean = false;
  j:boolean = false;
  s:boolean = false; 
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
    this.resp = false;
    this.j = false;
    this.s = false;
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
  saving(r){
    if(r == 1){
      this.resp = true;
    }else{
      this.resp = false;
    } 
  }
  jointac(r){
    if(r == 2){
      this.j = true;
    }else{
      this.j = false;
    } 
  }
  issenior(r){
    if(r == 2){
      this.s = true;
    }else{
      this.s = false;
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
  openfd(){
    var scheme = this.scheme;
    var amount = this.amount;
    var is_nominee =  this.is_nominee;
    var n_name = this.n_name;
    var rel_nomineee = this.rel_nomineee;
    var a_nominee = this.a_nominee;
    var is_minor = this.is_minor;
    var minor_id = this.minor;
    var is_saving= this.is_saving;
    var saving = this.resp;
    var nominee_type = 'FdAccount';
    var nominee = this.show_detail;
    var minor = this.form;
    var j = this.j;
    var joint = this.joint;
    var jac = this.jac
    var senior = this.senior
    var re = /^\d{4}(?:\s*,\s*\d{4)*$/;
    console.log('res2', scheme,amount,is_nominee,is_minor,n_name,rel_nomineee,a_nominee,this.j); 
    if (scheme==null||scheme==''|| amount==null||is_nominee==null||is_nominee==''||is_minor==null||is_minor==''|| is_saving==null||is_saving==''){
      this.provider.show_alert('All fields required ') 
      // console.log('res2', scheme,amount,is_nominee,is_minor,); 
    }else if(amount!=null){
        console.log('sdsdf')
        if (nominee == true){
          if (n_name==null||n_name==''|| rel_nomineee==null||rel_nomineee==null||a_nominee==''||a_nominee==null){
            this.provider.show_alert('Please fill Nominee details')
          }else{ 
            this.provider.presentLoading();
            // console.log('res', scheme,amount,is_nominee,is_minor,n_name,rel_nomineee,a_nominee,is_saving,joint,jac,j);
          this.provider.createfd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving,joint,jac,senior).subscribe(data=>{
          console.log('response',data)
          if(data['status'] == true){
            let navigationExtras: NavigationExtras = {
              
            };
            this.router.navigate(['/dashboard/home/fdview/add-new-fd/fd-open-successfully'], navigationExtras);
      
        }else{
        this.provider.show_alert(data['message'])
      
        }
      })
      
      }
        } 
  else if (minor == true){
    if (minor_id==null||minor_id==''){
      this.provider.show_alert('Please fill Minor details')
    }else{ console.log('res', scheme,amount,is_nominee,is_minor,n_name,rel_nomineee,a_nominee,is_saving,joint,jac,j);
    this.provider.createfd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving,joint,jac,senior).subscribe(data=>{
    console.log('response',data)
    if(data['status'] == true){
      let navigationExtras: NavigationExtras = {
        
      };
      this.router.navigate(['/dashboard/home/fdview/add-new-fd/fd-open-successfully'], navigationExtras);

  }else{
  this.provider.show_alert(data['message'])

  }
})

}
  }
  else if (this.j == true ){
  console.log('joint',joint); 
  if (!re.test(joint) || joint==null||joint==''){
    this.provider.show_alert('Please fill Member ID details')
  }else{ console.log('res', scheme,amount,is_nominee,is_minor,n_name,rel_nomineee,a_nominee,is_saving,joint,jac,j);
  this.provider.createfd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving,joint,jac,senior).subscribe(data=>{
  console.log('response',data)
  if(data['status'] == true){
    let navigationExtras: NavigationExtras = {
      
    };
    this.router.navigate(['/dashboard/home/fdview/add-new-fd/fd-open-successfully'], navigationExtras);

}else{
this.provider.show_alert(data['message'])

}
})

}
  }
  else if (this.s == true){
  if (senior==null||senior==''){
  this.provider.show_alert('Please fill Member ID details')
  }
  }else{ console.log('res', scheme,amount,is_nominee,is_minor,n_name,rel_nomineee,a_nominee,is_saving,joint,jac,j);
  this.provider.createfd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving,joint,jac,senior).subscribe(data=>{
  console.log('response',data)
  if(data['status'] == true){
    let navigationExtras: NavigationExtras = {
      
    };
    this.router.navigate(['/dashboard/home/fdview/add-new-fd/fd-open-successfully'], navigationExtras);

}else{
this.provider.show_alert(data['message'])

}
})

}
  }else{ console.log('res', scheme,amount,is_nominee,is_minor,n_name,rel_nomineee,a_nominee,is_saving,joint,jac,j);
      this.provider.createfd(scheme,amount,is_nominee,is_minor,is_saving,nominee_type,n_name,rel_nomineee,a_nominee,minor_id,saving,joint,jac,senior).subscribe(data=>{
      console.log('response',data)
      if(data['status'] == true){
        let navigationExtras: NavigationExtras = {
          
        };
        this.router.navigate(['/dashboard/home/fdview/add-new-fd/fd-open-successfully'], navigationExtras);
  
    }else{
    this.provider.show_alert(data['message'])
  
    }
  })
  
  }
  
  
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
