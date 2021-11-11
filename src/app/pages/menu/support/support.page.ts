import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public navCtrl: NavController
  gohome(){
    this.navCtrl.navigateRoot('/dashboard/home'); 
  }
}
