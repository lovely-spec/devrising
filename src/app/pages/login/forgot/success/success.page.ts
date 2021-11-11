import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';

@Component({
  selector: 'app-success',
  templateUrl: './success.page.html',
  styleUrls: ['./success.page.scss'],
})
export class SuccessPage implements OnInit {

  constructor(
    public platform: Platform,
    public navCtrl: NavController
  ) { }

  ngOnInit() {
  }
 gohome(){
  this.navCtrl.navigateRoot('/dashboard/home'); 
}
 ionViewDidEnter() {
    this.platform.backButton.subscribe(() => {
      this.navCtrl.navigateRoot('/dashboard/home'); 
      })
  }
}
