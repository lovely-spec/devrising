import { Component, OnInit } from '@angular/core';

import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { ModalController, PopoverController, NavController } from '@ionic/angular';
import { AddBeneficiaryPage } from './add-beneficiary/add-beneficiary.page';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { NotificationPage } from '../notification/notification.page';

@Component({
  selector: 'app-beneficiary',
  templateUrl: './beneficiary.page.html',
  styleUrls: ['./beneficiary.page.scss'],
})
export class BeneficiaryPage implements OnInit {

  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public provider: ApihelperProvider,
    public modalController : ModalController,
    public popoverController: PopoverController,
    public navCtrl: NavController
  ) { }
  public savingdata: any;
  public beneficiary_list: any = [];
  ngOnInit() {
    
  }
  async presentPopover(ev: any) {
  
    const popover = await this.popoverController.create({
      component: NotificationPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
 gohome(){
  this.navCtrl.navigateRoot('/dashboard/home'); 
}
 ionViewDidEnter() {
    this.provider.presentLoading()
    this.provider.BeneficiaryList().subscribe(data=>{
      if(data['status'] == true ){
      this.beneficiary_list = data['message'];
      }
    })
    //Get Session Message
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.provider.show_alert(JSON.parse(params.special))
      }
    })
  }
  check_ben(ben_id){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(ben_id)
      }
    };
    this.router.navigate(['dashboard/detailsview'], navigationExtras);

  }
  async add_ben() {
    const modal = await this.modalController.create({
      component: AddBeneficiaryPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }
  

}
