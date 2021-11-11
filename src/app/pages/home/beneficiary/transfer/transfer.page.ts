import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController, PopoverController, NavController } from '@ionic/angular';
import { TandcPage } from 'src/app/pages/menu/tandc/tandc.page';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { NotificationPage } from '../../notification/notification.page';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage {
  public bene_data: any;
  public UserResponse: any= []
  public SavingAccNo: any;
  public Balance: any;
  public amount: any;
  public message: any;
  
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public provider: ApihelperProvider,
    public modalController : ModalController,
    public popoverController: PopoverController,
    public alertController: AlertController,
    public navCtrl: NavController,
  ) { }

 gohome(){
  this.navCtrl.navigateRoot('/dashboard/home'); 
}
 ionViewDidEnter() {
    console.log('aayayayaya')
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.bene_data =  JSON.parse(params.special);
        console.log('bene',this.bene_data)
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
    if(this.amount > 100 || this.Balance >= 100){
      if(this.checked){
        this.provider.TransferMony(this.bene_data.account_no,this.bene_data.b_type,this.bene_data.beneficiary_id,this.bene_data.bank_name,this.bene_data.ifsc,this.bene_data.name, this.SavingAccNo, this.amount).subscribe(data=>{
          if(data['status'] == true ){
            let route = 'dashboard/transaction'
            this.message = 'Your transaction successfully sent for admin approval click ok to continue.'
            this.provider.success_alert(this.message,route)
          }else{
            this.provider.show_alert(data['message'])
          }
        })
      }else{
        this.message = "Please check on checkbox to confirm T&C."
        this.provider.show_alert
(this.message)
      }
    }else{
      this.message = "Amount Should be grater then 500.."
      this.provider.show_alert
(this.message)
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
