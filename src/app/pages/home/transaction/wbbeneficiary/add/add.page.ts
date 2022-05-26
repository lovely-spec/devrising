import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  name: string = '';
  response:any ;
  mobile_no: string = '';
  bank_name: string = '';
  ifsc_code: string = '';
  account_no: string = '';
  chk_account_no: string = '';
  constructor(
    public modalController: ModalController,
    public provider: ApihelperProvider,
    public router: Router
  ) { }

  ngOnInit() {
  }
  onkeyup(event:any){
    if (event.target.value.length == 10){
      console.log(event.target.value)
      var mobile_no = event.target.value
      this.provider.check_saving(mobile_no).subscribe(data=>{
        console.log(data);
        if(data['status'] == true ){
        this.response = data['saving']
        }else{
          this.provider.show_alert(data['message'])
        }
      })
    }else if (event.target.value.length < 10){
      this.response = []
    }
  }
  select_account(a){
    this.account_no = a
  }
  add_new(){
    var name = this.name;
    var mobile_no = this.mobile_no;
    var account_no = this.account_no;
      console.log(name,mobile_no,account_no.length);
      if(name==''||mobile_no==''||account_no==''){
        this.provider.show_alert('All Fields are required! Please check for missing one')
      }else{
        this.provider.AddWBBeneficiary(name,mobile_no,account_no).subscribe(data=>{
          if(data['status'] == true ){
            console.log(data)
            let navigationExtras: NavigationExtras = {
              queryParams: {
                special: JSON.stringify(data['message'])
              }
            };
            this.modalController.dismiss({
              'dismissed': true
            });
            this.router.navigate(['dashboard/transaction'], navigationExtras);
          }else{
            this.provider.show_alert(data['message'])
          }
        })
      }
    }
    list(){
      this.router.navigate(['dashboard/wbbeneficiary'])
    }

    dismiss() {
      // using the injected ModalController this page
      // can "dismiss" itself and optionally pass back data
      this.modalController.dismiss({
        'dismissed': true
      });
    }

}
