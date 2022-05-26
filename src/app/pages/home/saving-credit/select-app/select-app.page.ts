import { Component, OnInit } from '@angular/core';
import { PluginsConfig} from '@capacitor/cli';
// import { AnyPlugin } from '@capacitor/core';
// import { Plugins, AppState } from '@capacitor/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavigationExtras, Router } from '@angular/router';
import {SharedService } from '../../add-member/shared.service';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';

// const { App } = Plugins;
@Component({
  selector: 'app-select-app',
  templateUrl: './select-app.page.html',
  styleUrls: ['./select-app.page.scss'],
})
export class SelectAppPage implements OnInit {
  app_response:string;
  res:string;
  slug:string;
  am:string;
  member_id:string;
  public UserResponse: any = [];
  saving_account_id:string;
  utr_no:string;
  payment_mode:string;
  amount:string;
  constructor(
    private iab: InAppBrowser,
    public router: Router,
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
  }
  ngOnInit() {
  }
  opengpay(){
    
    this.iab.create('upi://pay?pa=UPIID@oksbi&amp;pn=JOHN BRITAS AK &amp;cu=INR' ,'_blank');
    
  }
  openphonepe(){
    
    this.iab.create('http://com.phonepe.app' ,'_blank');
    
  }
  openpaytm(){
    
    this.iab.create('http://net.one97.paytm' ,'_blank');
    
  }
  openamazonpay(){
    
    this.iab.create('http://in.amazon.mShop.android.shopping' ,'_blank');
    
  }
  
  next(){

    this.payment_mode = this.app_response
    this.amount = this.am
    this.shared.setpay(this.app_response)
    console.log('jgfdj0', this.app_response)
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
  
    
}
