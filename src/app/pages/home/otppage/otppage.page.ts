import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {  AlertController, NavController, NavParams, PopoverController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';import { NotificationPage } from '../notification/notification.page';
;

@Component({
  selector: 'app-otppage',
  templateUrl: './otppage.page.html',
  styleUrls: ['./otppage.page.scss'],
})
export class OtppagePage {

  otpmsg: any;
  AccountNo: any;
  AccountType: any;
  response: any;
  data: any = '';
  show: boolean = false
  constructor(public navCtrl: NavController,
    private router: Router,
    public route: ActivatedRoute,
    public popoverController: PopoverController,
    public alertController: AlertController,
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
        console.log(this.data);
      }
    })
    if(this.show == false){
      setTimeout( () => {
        this.show = true
    }, 60000);
    }
    
  }
  send_money(){
          if(this.otpmsg){
              this.provider.AddPayment(this.data.type,this.data.slug,this.data.amount,this.data.account_number, this.otpmsg).subscribe(data=>{
                if(data['status'] == true ){
                  this.show_alert()
                }else{
                  this.provider.show_alert(data['message'])
                }
              })

      }else{
        this.provider.show_alert('Invalid Amount Please Enter in multiple of'+ this.data.base_amount +' ')
        
      }
    
  }
  async show_alert(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Success',
      message: 'Your transaction successfully preccessed please click Okay to continue!',
      buttons: [
         {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['dashboard/home'])
          }
        }
      ]
    });

    await alert.present();
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
  async presentPopover(ev: any) {
  
    const popover = await this.popoverController.create({
      component: NotificationPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
