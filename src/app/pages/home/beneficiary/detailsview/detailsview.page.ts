import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController, PopoverController, NavController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { NotificationPage } from '../../notification/notification.page';

@Component({
  selector: 'app-detailsview',
  templateUrl: './detailsview.page.html',
  styleUrls: ['./detailsview.page.scss'],
})
export class DetailsviewPage {
  public bene_id: any
  public bene_data: any = ''
  public popoverController: PopoverController
  constructor(
    public router: ActivatedRoute,
    public route: Router,
    public provider: ApihelperProvider,
    public navCtrl: NavController,
    public alertController: AlertController
  ) { }

 gohome(){
  this.navCtrl.navigateRoot('/dashboard/home'); 
}
 ionViewDidEnter() {
    this.provider.presentLoading()
    this.router.queryParams.subscribe(params => {
      if (params && params.special) {
        this.bene_id = JSON.parse(params.special);
        this.provider.BenDetails(this.bene_id).subscribe(data=>{
          if(data['status'] == true ){
          this.bene_data = data['message'];
          }
        })
      }
    })
  }
  async presentAlertConfirm() {
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
            // console.log('Confirm Cancel');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.provider.DeleteBene(this.bene_id).subscribe(data=>{
              if(data['status'] == true ){
                let navigationExtras: NavigationExtras = {
                  queryParams: {
                    special: JSON.stringify(data['message'])
                  }
                };
                this.provider.presentLoading();
                this.route.navigate(['dashboard/beneficiary'], navigationExtras);
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
  transfer_page(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.bene_data)
      }
    };
    this.provider.presentLoading();
    this.route.navigate(['dashboard/transfer'], navigationExtras);
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
