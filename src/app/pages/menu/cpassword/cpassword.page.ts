import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { Storage } from '@ionic/storage';
  
@Component({
  selector: 'app-cpassword',
  templateUrl: './cpassword.page.html',
  styleUrls: ['./cpassword.page.scss'],
})
export class CpasswordPage {
  currentPwd : string = '';
  newPwd : string = '';
  confirmPwd : string = '';
  constructor( private storage: Storage,public navCtrl: NavController, public navParams: NavParams, private apihelper : ApihelperProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePwdPage');
  }
  changePassword(){

    if(this.currentPwd ===''){
      this.apihelper.presentToastWithOptions("Missing Current Password");
    }else if(this.newPwd ===''){
      this.apihelper.presentToastWithOptions("Missing New Password");
    }else if(this.confirmPwd ===''){
      this.apihelper.presentToastWithOptions("Missing Confirm Password");
    }
    else if(this.confirmPwd != this.newPwd){
      this.apihelper.presentToastWithOptions("Password not match!");
    }else{
      this.apihelper.presentLoading();
      this.apihelper.ChangePwd(this.currentPwd,this.newPwd).subscribe((data)=>{
       
        let result : any = data;
        console.log(result);
        console.log(result.message);
        if(result.status == true){
          alert("Password Reset Successfully! You can now login");
          this.storage.remove('offline-user');
          this.storage.remove('current_member');
          this.navCtrl.navigateRoot('/');
        }else{
          this.apihelper.presentToastWithOptions(result.message);
        }
        this.currentPwd = '';
        this.newPwd = '';
        this.confirmPwd = '';
      },(erro)=>{console.log(erro);})
    }

  }

}
