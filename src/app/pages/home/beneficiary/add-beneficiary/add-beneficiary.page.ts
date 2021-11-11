import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { BankNamePage } from './bank-name/bank-name.page';

@Component({
  selector: 'app-add-beneficiary',
  templateUrl: './add-beneficiary.page.html',
  styleUrls: ['./add-beneficiary.page.scss'],
})
export class AddBeneficiaryPage implements OnInit {
  name: string = '';
  mobile_no: string = '';
  bank_name: string = '';
  ifsc_code: string = '';
  account_no: string = '';
  chk_account_no: string = '';
  message: any;
 
  public isAccountNoValid: boolean;
  public isChkAccountNoValid: boolean;
  constructor(
    public modalController1: ModalController,
    public provider: ApihelperProvider,
    public router: Router,
    public route: ActivatedRoute,
    public popoverController: PopoverController,
  ) { 
    this.isAccountNoValid = true;
    this.isChkAccountNoValid = true;
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.bank_name = JSON.parse(params.special);
      }
    })
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController1.dismiss({
      'dismissed': true
    });
  }
  add_new(){
  var name = this.name;
  var mobile_no = this.mobile_no;
  var bank_name = this.bank_name;
  var ifsc_code = this.ifsc_code;
  var account_no = this.account_no;
  var chk_account_no = this.chk_account_no;
  console.log(bank_name)
    // console.log(name,mobile_no,bank_name,ifsc_code,account_no.length,chk_account_no);
    if(name==''||mobile_no==''||bank_name==''||ifsc_code==''||account_no==''||chk_account_no==''){
      this.message = "All Fields are required! Please check for missing one."
      this.provider.show_alert
(this.message)
    }
    else if(account_no.length < 10){
      this.message = "Account Number Must have atleast 10 digit in it."
      this.provider.show_alert
(this.message)
    }else if(ifsc_code.length < 11){
      this.message = "IFSC Code is incorrect! It must be 11 digit long."
      this.provider.show_alert
(this.message)
    }
    else if(account_no != chk_account_no){
      this.message = "Account Numbers are not matching."
      this.provider.show_alert
(this.message)
    }else{
      this.provider.AddBeneficiary(name,mobile_no,bank_name,ifsc_code,account_no).subscribe(data=>{
        if(data['status'] == true ){
          let navigationExtras: NavigationExtras = {
            queryParams: {
              special: JSON.stringify(data['message'])
            }
          };
          this.modalController1.dismiss({
            'dismissed': true
          });
          this.router.navigate(['dashboard/transaction'], navigationExtras);
        }else{
          this.message = "Something Went wrong! Please try in a few minutes"
          this.provider.show_alert
(this.message)
        }
      })
    }
  }
  async presentPopover() {
  console.log(this.bank_name)
    const popover = await this.modalController1.create({
      component: BankNamePage,
    });
    return await popover.present();
  }
}
