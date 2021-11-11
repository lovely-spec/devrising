import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, ModalController, PopoverController, NavController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { AddPage } from './add/add.page';
import { NotificationPage } from '../../notification/notification.page';

@Component({
  selector: 'app-wbbeneficiary',
  templateUrl: './wbbeneficiary.page.html',
  styleUrls: ['./wbbeneficiary.page.scss'],
})
export class WbbeneficiaryPage implements OnInit {
  public beneficiary_list: any = []
  public bene_id: any
  constructor(
    private router: Router,
    public route: ActivatedRoute,
    public provider: ApihelperProvider,
    public alertController: AlertController,
    public modalController : ModalController,
    public popoverController: PopoverController,
    public navCtrl: NavController,
    
  ) { }

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
    this.provider.WBBeneficiaryList().subscribe(data=>{
      console.log(data);
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

  async delete(bene_id) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Confirm!',
      message: '<strong>Are you sure want to delete</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.provider.DeleteBene(bene_id).subscribe(data=>{
              if(data['status'] == true ){
                let navigationExtras: NavigationExtras = {
                  queryParams: {
                    special: JSON.stringify(data['message'])
                  }
                };
                this.router.navigate(['dashboard/transaction'], navigationExtras);
              }else{
                this.provider.show_alert('Something Went wrong! Please try in a few minutes')
              }
            })
          }
        }
      ]
    });

    await alert.present();
  }
  transfer(beneficiary_list){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(beneficiary_list)
      }
    };
    this.router.navigate(['dashboard/wbtransfer'], navigationExtras);
  }
  async add_ben(){
    const modal = await this.modalController.create({
      component: AddPage,
      cssClass: 'my-custom-class',
      componentProps: {
      }
    });
    return await modal.present();
  }
}
