import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import {  AlertController, NavController, NavParams, PopoverController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { NotificationPage } from '../../../notification/notification.page';

/**
 * Generated class for the OtpVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
})
export class OtpPage {
  otpmsg: any;
  AccountNo: any;
  AccountType: any;
  response: any;
  data: any = '';
  show: boolean = false
  constructor(public navCtrl: NavController,
    private router: Router,
    public route: ActivatedRoute,
    public alertController: AlertController,
    public popoverController: PopoverController,
    public navParams: NavParams, public provider: ApihelperProvider) {
  }
  gohome(){
    this.navCtrl.navigateRoot('/dashboard/home'); 
  }
  ionViewWillEnter() {
    this.provider.presentLoading()
    console.log('aaya')
      this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data =  JSON.parse(params.special);
      }
    })
    if(this.show == false){
      setTimeout( () => {
        this.show = true
    }, 60000);
    }
    console.log(this.data.amount)
  }
  send_money(){
    if(this.otpmsg){
      console.log(this.data)
        this.provider.ConfirmOtp(this.data.account_no,this.data.b_type,this.data.beneficiary_id,this.data.bank_name,this.data.ifsc,this.data.name, this.data.fromsavingaccno, this.data.saving_balance, this.data.amount,this.otpmsg,"debit").subscribe(data=>{
          if(data['status'] == true ){
            this.show_alert()
          }else{
            this.provider.show_alert(data['message'])
          }
        })

    }else{
      this.provider.show_alert('Please enter the otp sent to your registered mobile number')
    }
    
  }
  resend(){
    this.provider.ResendOtp().subscribe(data=>{
      if(data['status'] == true ){
        this.show = false
        this.provider.show_alert(data['message'])
        setTimeout( () => {
          this.show = true
      }, 120000);
      }else{
        this.provider.show_alert(data['message'])
      }
    })
  }
  async show_alert(){
    const alert = await this.alertController.create({
      cssClass: 'success_alert',
      header: 'Success',
      message: 'Your transaction successfully sent for admin approval click ok to continue.',
      buttons: [
         {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['dashboard/transaction'])
          }
        }
      ]
    });

    await alert.present();
  }

  async presentPopover(ev: any) {
  
    const popover = await this.popoverController.create({
      component: NotificationPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  
}
