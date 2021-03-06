import { Component, OnInit } from '@angular/core';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { Router, ActivatedRoute } from '@angular/router';
import { ModalController, PopoverController, NavController } from '@ionic/angular';
import { AddPage } from './wbbeneficiary/add/add.page';
import { NotificationPage } from '../notification/notification.page';
import { AddBeneficiaryPage } from '../beneficiary/add-beneficiary/add-beneficiary.page';
import { Storage } from '@ionic/storage';
import {SharedService } from '../add-member/shared.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  public notification: any = [];
  constructor(
    private storage: Storage,
    public provider: ApihelperProvider,
    public router: Router,
    public route: ActivatedRoute,
    public modalController : ModalController,
    public popoverController : PopoverController,
    public navCtrl: NavController,
    public shared: SharedService,
  ) { }
  public UserResponse: any = [];
  public Saving: any = [];
  public amount: number;
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
      console.log(this.Saving.length);
    })
    this.storage.get('notifications').then((val) => {
      if(val['status'] == "success"){
      this.notification =  val.data
      // console.log( '6yh7rfuh', this.notification.length)
      }
    }); 
    
  }
  ionViewWillEnter(){
    // console.log('aayadfgfghh')
    this.shared.sethome(false);
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.provider.success_alert_with_no_route(JSON.parse(params.special))
      }
    })
  }
  async add(){
    const modal = await this.modalController.create({
      component: AddPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }
  async add_aoutside(){
    const modal = await this.modalController.create({
      component: AddBeneficiaryPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }
  
  list(){
    this.router.navigate(['dashboard/wbbeneficiary'])
  }
  history(type){
    
  }
  check_ben(){
    this.router.navigate(['dashboard/beneficiary']);
  }
  view_transactions(){
    this.router.navigate(['dashboard/transactions']);
  }
   presentPopover(ev: any) {
  
    this.router.navigate(['dashboard/add-beneficiary']);
   }
}
