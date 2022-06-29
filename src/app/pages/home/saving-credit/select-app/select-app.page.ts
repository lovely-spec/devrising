import { Component, OnInit } from '@angular/core';
import { PluginsConfig} from '@capacitor/cli';
// import { AnyPlugin } from '@capacitor/core';
// import { Plugins} from '@capacitor/core';
import { InAppBrowser, InAppBrowserObject } from '@ionic-native/in-app-browser/ngx';
import { NavigationExtras, Router } from '@angular/router';
import {SharedService } from '../../add-member/shared.service';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
// import { AppAvailability } from '@ionic-native/app-availability/ngx';
// import { Platform } from '@ionic/angular';
// const { App } = Plugins;
@Component({
  selector: 'app-select-app',
  templateUrl: './select-app.page.html',
  styleUrls: ['./select-app.page.scss'],
})
export class SelectAppPage implements OnInit {
  app_response:string = '';
  res:string;
  slug:string;
  am:string;
  bank:string;
  upi:string;
  account:string;
  ifsc:string;
  member_id:string;
  public UserResponse: any = [];
  saving_account_id:string;
  utr_no:string;
  payment_mode:string;
  amount:string;
  constructor(
    private iab: InAppBrowser,
    public router: Router,
    // public platform: Platform,
    // public appAvailability: AppAvailability,
    public shared: SharedService,
    private provider : ApihelperProvider,
  ) { }
  ionViewDidEnter() {
    var res = this.app_response
    this.am = this.shared.getamount()
    this.provider.UserPanel().subscribe(data=>{
      this.UserResponse = this.provider.User_details(data);
      this.member_id = this.UserResponse.Saving[0].member_id
      this.saving_account_id = this.UserResponse.Saving[0].id
      console.log('response',this.member_id,this.saving_account_id)
    })
    this.provider.bank_details().subscribe(data=>{
      console.log('datadada',data)
      if(data['status'] == true){
        this.bank = data['data'][0].upi_id;
        this.upi = this.bank 
        this.account = data['data'][0].account_number;
        this.ifsc = data['data'][0].ifsc;
        console.log('datadada',this.bank)
      }
    })
  }
  openGpay() {
             this.iab.create('android-app://'+ 'com.google.android.apps.nbu.paisa.user', '_system', 'location=yes')
  }
  
  ngOnInit() {
  }
  
  openphonepe(){
    
    this.iab.create('android-app://'+ 'com.phonepe.app' ,'_system' , 'location=yes');
    
  }
  openpaytm(){
    
    this.iab.create('android-app://'+ 'net.one97.paytm' ,'_system', 'location=yes');
    
  }
  openamazonpay(){
    
    this.iab.create('android-app://'+ 'in.amazon.mShop.android.shopping' ,'_system', 'location=yes');
    
  }
  
  next(){

    if(this.app_response == ''){
      this.payment_mode = 'other'
    }else{
      this.payment_mode = this.app_response
    }
    this.amount = this.am
    this.shared.setpay(this.app_response)
    console.log('jgfdj0', this.app_response)

    if(this.app_response == 'g_pay'){
      this.iab.create('android-app://'+ 'com.google.android.apps.nbu.paisa.user', '_system', 'location=yes')
    }if(this.app_response == 'phone_pay'){
      this.iab.create('android-app://'+ 'com.phonepe.app' ,'_system' , 'location=yes');
    }if(this.app_response == 'amazon_pay'){
      this.iab.create('android-app://'+ 'in.amazon.mShop.android.shopping' ,'_system', 'location=yes');
    }if(this.app_response == 'paytm'){
      this.iab.create('android-app://'+ 'net.one97.paytm' ,'_system', 'location=yes');
    }else{
      
    }
    
    this.provider.transec(this.member_id,this.saving_account_id,this.payment_mode,this.amount,).subscribe(data=>{
      console.log('responsed',data)
      if(data['status'] == true){
        this.slug = data['details'].slug
        console.log('slug', this.slug)
        this.shared.setslg(this.slug)
        let navigationExtras: NavigationExtras = {
        };

        this.router.navigate(['/dashboard/transaction/saving-credit/select-app/confirm-payment'], navigationExtras);
        console.log(data)
    }else{
    this.provider.show_alert(data['message'])
     }
   })
  }
  
  copyMessage(){
    var val:string;
    val = this.upi
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.innerText = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }
}
