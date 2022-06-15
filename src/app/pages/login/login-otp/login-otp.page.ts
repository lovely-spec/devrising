import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import {  AlertController, NavController, NavParams, PopoverController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import {SharedService } from '../../home/add-member/shared.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login-otp',
  templateUrl: './login-otp.page.html',
  styleUrls: ['./login-otp.page.scss'],
})
export class LoginOtpPage implements OnInit {
  otpmsg: any;
  member_no: any;
  AccountNo: any;
  LoginReponse : any;
  AccountType: any;
  response: any;
  data: any = '';
  show: boolean = false
  disabled: boolean = true;
  constructor(
    public navCtrl: NavController,
    private router: Router,
    public route: ActivatedRoute,
    private storage: Storage,
    public SharedService: SharedService ,
    public alertController: AlertController,
    public popoverController: PopoverController,
    public navParams: NavParams, public provider: ApihelperProvider,
    
  ) { }

  ngOnInit(){
    setTimeout(() => {
      this.disabled = false;
    }, 6);
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
      this.member_no = this.SharedService.getnumber();
        this.provider.verify_otp(this.otpmsg,this.member_no).subscribe(data=>{
          if(data['status'] == true ){
            console.log(data);
            // this.show_alert()
            this.LoginReponse = data;
            this.provider.SetHeader(this.LoginReponse.token,this.LoginReponse.user_id);
            this.provider.UserPanel().subscribe(data=>{
              let UserResponse = this.provider.User_details(data);
              console.log(UserResponse)
              this.storage.set('current_member', UserResponse.current_member)
            });
            this.navCtrl.navigateRoot('/dashboard/home');
          }else{
            this.provider.show_alert('Incorrect OTP')
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

}
