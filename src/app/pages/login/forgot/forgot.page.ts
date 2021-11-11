import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { Storage } from '@ionic/storage';
import { AlertController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {
  title = 'FormValidation';  
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$";  
  isValidFormSubmitted = false; 
  mobileNumber:any = ''; 
  username: any='';
  otpval: any = '';
  constructor(
    public provider: ApihelperProvider,
    private storage: Storage,
    public navCtrl: NavController,
    private router: Router,
    public alertController: AlertController,
  ) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {  
    this.isValidFormSubmitted = false;  
    if (form.invalid) {  
       return;  
    }  
    
  this.provider.ForgotPass(this.mobileNumber, this.username).subscribe(res =>{
    let result : any = res;
    if(result.status == true){
      alert("Password Sent to your mobile successfully, You can login now!");
      this.storage.remove('current_member');
      this.navCtrl.navigateRoot('/');
    }else{
      this.provider.show_alert(result.message)
    }
    })  
    this.isValidFormSubmitted = true;  
    form.resetForm();  
 }
 

}