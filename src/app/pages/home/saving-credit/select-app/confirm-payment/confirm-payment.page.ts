import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {SharedService } from '../../../add-member/shared.service';
import { NavigationExtras, Router } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';

@Component({
  selector: 'app-confirm-payment',
  templateUrl: './confirm-payment.page.html',
  styleUrls: ['./confirm-payment.page.scss'],
})
export class ConfirmPaymentPage implements OnInit {
  res:string;
  am:string;
  slug:string;
  member_id:string;
  public UserResponse: any = [];
  saving_account_id:string;
  utr_no:string;
  bank:string;
  upi:string;
  account:string;
  ifsc:string;
  div:boolean = true;
  payment_mode:string;
  amount:string;
  constructor(
    private iab: InAppBrowser,
    public shared: SharedService,
    public router: Router,
    private provider : ApihelperProvider,
  ) { }
  ionViewDidEnter() {
    this.slug = this.shared.getslg()
    this.am = this.shared.getamount()
    this.provider.bank_details().subscribe(data=>{
      if(data['status'] == true){
        this.bank = data['data'][0].upi_id;
        this.upi = this.bank 
        this.account = data['data'][0].account_number;
        this.ifsc = data['data'][0].ifsc;
        console.log('datadada',this.bank)
      }
    })
    // this.provider.UserPanel().subscribe(data=>{
    //   this.UserResponse = this.provider.User_details(data);
    //   this.member_id = this.UserResponse.Saving[0].member_id
    //   this.saving_account_id = this.UserResponse.Saving[0].id
    //   console.log('response',this.member_id,this.saving_account_id)
    // })
  } 
  
  ngOnInit() {
    this.res = this.shared.getpay()
    console.log('response',this.am)
  }
  

  open(){
    var res = this.shared.getpay()
    console.log('response',this.res)
    if ( res != undefined ){
      console.log('response',this.res)
    if (res == 'g_pay')
    {
      
      this.iab.create('http://com.google.android.apps.nbu.paisa.user' ,'_blank');  
    }if(res == 'amazon_pay'){
      
      this.iab.create('http://in.amazon.mShop.android.shopping' ,'_blank');
    }
    if(res == 'paytm'){
      
      this.iab.create('http://net.one97.paytm' ,'_blank');
    }
    if(res == 'phone_pay'){
      
      this.iab.create('http://com.phonepe.app' ,'_blank');
    }
    }else{
      console.log('responsesf')
      this.provider.show_alert('please select UPI app for payment')
    }
    
    
    
  }
  openphonepe(){
    
    this.iab.create('http://com.phonepe.app' ,'_system');
    
  }
  openpaytm(){
    
    this.iab.create('http://net.one97.paytm' ,'_system');
    
  }
  openamazonpay(){
    
    this.iab.create('http://in.amazon.mShop.android.shopping' ,'_system');
    
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
  // makepayment(){
  //   this.payment_mode = this.res
  //   this.amount = this.am
  //   this.provider.transec(this.member_id,this.saving_account_id,this.payment_mode,this.amount,).subscribe(data=>{
  //     console.log('responsed',data)
  //     if(data['status'] == true){
        
  //       console.log(data)
  //   }else{
  //   this.provider.show_alert(data['message'])
  // }
  //   })
  // }
  submit(){
    if (this.utr_no !="" ||this.utr_no != null ){
      this.provider.presentLoading();
    this.provider.utrno(this.slug,this.utr_no).subscribe(data=>{
          console.log('responsed',data)
          if(data['status'] == true){
            // console.log(data)
            let navigationExtras: NavigationExtras = {
            };
            this.router.navigate(['/dashboard/transaction/saving-credit/select-app/confirm-payment/successful-page'], navigationExtras);
            // console.log(data)
        }else{
        this.provider.show_alert(data['message'])
      }
        })
    
      }else{
        this.provider.show_alert("please enter UTR No or Transection Id")
      }
  }
  upload(){
    this.div = false
    var v = this.shared.getslg()
    // this.iab.create('https://staging.devrising.in/trans-image/' + v ,'_blank');
    this.iab.create('https://app.devrising.in/trans-image/' + v ,'_blank');
    // this.iab.create('https://app.devrising.in/' + v ,'_blank');
    // this.iab.create('http://localhost:3000/trans-image/' + v ,'_blank');
  }


}
