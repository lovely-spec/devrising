import { Component, OnInit } from '@angular/core';
import { PopoverController, NavController } from '@ionic/angular';
import { NotificationPage } from '../../home/notification/notification.page';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.page.html',
  styleUrls: ['./bank.page.scss'],
})
export class BankPage implements OnInit {

  constructor(
    public popoverController: PopoverController,
    public navCtrl: NavController
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
}
