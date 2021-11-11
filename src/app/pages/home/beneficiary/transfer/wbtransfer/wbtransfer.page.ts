import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ModalController, PopoverController, NavController } from '@ionic/angular';
import { TandcPage } from 'src/app/pages/menu/tandc/tandc.page';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { NotificationPage } from '../../../notification/notification.page';
@Component({
  selector: 'app-wbtransfer',
  templateUrl: './wbtransfer.page.html',
  styleUrls: ['./wbtransfer.page.scss'],
})
export class WbtransferPage  {
  public bene_data: any;
  public UserResponse: any= []
  public SavingAccNo: any;
  public Balance: any;
  public amount: any;
  public data: any;
  public orderForm:any
  
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public provider: ApihelperProvider,
    public modalController : ModalController,
    public popoverController: PopoverController,
    public navCtrl: NavController,
  ) { }
  gohome(){
    this.navCtrl.navigateRoot('/dashboard/home'); 
  }
  ionViewWillEnter() {
    console.log('aayayayay')
    this.provider.presentLoading()
    
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.bene_data =  JSON.parse(params.special);
        // console.log(this.bene_data)
        this.provider.UserPanel().subscribe(data=>{
          this.UserResponse = this.provider.User_details(data);
          
          if(this.UserResponse){
          this.SavingAccNo = this.UserResponse.Saving['0'].account_number;
          this.Balance = this.UserResponse.Saving['0'].balance_available;
          }
        })
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
  transfer_money(){
    console.log(this.amount)
    this.data = {
      'fromsavingaccno': this.SavingAccNo,
      'saving_balance': this.Balance,
      'amount': parseInt(this.amount),
      'account_no': this.bene_data.account_no,
      'b_type': this.bene_data.b_type,
      'beneficiary_id': this.bene_data.beneficiary_id,
      'bank_name': this.bene_data.bank_name,
      'ifsc': this.bene_data.ifsc,
      'name': this.bene_data.account_no,
    }
    console.log('sdfrtyrtydf',this.amount)
    if(this.amount >= 100){
      if(this.checked){
        if(this.amount > this.Balance){
          this.provider.show_alert('Insuficiant balance in account')
        }else{
          this.provider.presentLoading()
        this.provider.SendOtp().subscribe(data=>{
          if(data['status'] == true ){
            let navigationExtras: NavigationExtras = {
              queryParams: {
                special: JSON.stringify(this.data)
              }
            };
            this.router.navigate(['dashboard/verifyotp'], navigationExtras);
          }else{
            this.provider.show_alert(data['message'])
          }
        })
        }
      }else{
        this.provider.show_alert('Please check on checkbox to confirm T&C')
      }
    }else{
      this.provider.show_alert('The minimum amount should be 100')
    }
  }
  async tandc(){
    const modal = await this.modalController.create({
      component: TandcPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }
  checked : boolean = true;
  addValue(e): void {
    var isChecked = e.currentTarget.checked;
  }

}
