import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Platform, LoadingController, NavController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { CreatePdf } from 'src/providers/CreatePdf';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
 
 
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage {
  public ProfileResponse: any = '';
  public enrollment_date: any = '';
  public dob: any = '';
  momentjs: any = moment;
  
  constructor( private providor: ApihelperProvider ,public navCtrl: NavController , private memberdetail: CreatePdf,public storage: Storage, private platform: Platform) { }
 
 gohome(){
  this.navCtrl.navigateRoot('/dashboard/home'); 
}
 ionViewDidEnter() {
       // User Details From API
    this.storage.get('current_member').then((val) => {
      console.log(val)
      this.ProfileResponse = val;
      
      this.enrollment_date = this.momentjs(this.ProfileResponse.enrollment_date).format("DD-MM-YYYY");
      this.dob = this.momentjs(this.ProfileResponse.dob).format("DD-MM-YYYY");
    });
    
  }
 
}