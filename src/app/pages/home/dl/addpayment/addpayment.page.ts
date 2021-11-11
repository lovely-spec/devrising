import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { PopoverController, NavController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { NotificationPage } from '../../notification/notification.page';

@Component({
  selector: 'app-addpayment',
  templateUrl: './addpayment.page.html',
  styleUrls: ['./addpayment.page.scss'],
})
export class AddpaymentPage implements OnInit {

  constructor(
    public provider: ApihelperProvider,
    private router: Router,
    public route: ActivatedRoute,
    public popoverController: PopoverController,
    public navCtrl: NavController,
  ) { }
  
  public UserResponse: any=[]
  public Saving: any=[]
  public amount: any = ''
  public Dldata: any = []
  public data: any = []
  ngOnInit() {
  }

 gohome(){
  this.navCtrl.navigateRoot('/dashboard/home'); 
}
 ionViewDidEnter() {
    this.provider.presentLoading()
    this.provider.UserPanel().subscribe(data=>{
      this.UserResponse = this.provider.User_details(data);
      this.Saving = this.UserResponse.Saving;
      console.log(this.Saving);
    })

    // Get Minimum amount
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        console.log(JSON.parse(params.special))
        this.Dldata = JSON.parse(params.special)
        console.log('ol',this.Dldata);
        this.amount = parseInt(this.Dldata.current_debt).toLocaleString('en-IN') //emi_amount
      }
    })
  }
  
  AddPayment(){
    var num = this.amount;
    this.data = {
      'account_number': this.Saving['0'].account_number,
      'amount': parseInt(num),
      'slug': this.Dldata.slug,
      'type': 'DL',
      'base_amount': this.Dldata.emi_amount
      
    }
    var num = this.amount;
    var num2 = parseInt(num);
    if(this.Saving['0'].balance_available > num2){
      if(num2 >= parseInt(this.Dldata.emi_amount))
            this.provider.SendTransactionOtp().subscribe(data=>{
              if(data['status'] == true ){
                let navigationExtras: NavigationExtras = {
                  queryParams: {
                    special: JSON.stringify(this.data)
                  }
                };
                this.router.navigate(['dashboard/otppage'], navigationExtras);
              }else{
                this.provider.show_alert(data['message'])
              }
            })
      else{
        this.provider.show_alert('Amount should be greater then '+ parseInt(this.Dldata.emi_amount) +' ')
      }
    }else{
      this.provider.show_alert('Insufficiant balance in your Saving account!')
    }
    // this.provider.AddPayment('RD',this.Dldata.slug,this.amount,this.Saving['0'].account_number).subscribe(data=>{
    //       console.log(data);
    // });
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
