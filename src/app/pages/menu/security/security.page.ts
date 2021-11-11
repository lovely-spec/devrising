import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
// import * as $ from “jquery”;

@Component({
  selector: 'app-security',
  templateUrl: './security.page.html',
  styleUrls: ['./security.page.scss'],
})
export class SecurityPage implements OnInit {

  constructor() { }
public navCtrl: NavController
  ngOnInit() {
  }
  gohome(){
    this.navCtrl.navigateRoot('/dashboard/home'); 
  }
}
