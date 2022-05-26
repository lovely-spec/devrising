import { Component, OnInit } from '@angular/core';
import { SharedService } from '../add-member/shared.service';
import { NavigationExtras, Router } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import {Location} from '@angular/common';

@Component({
  selector: 'app-saving-credit',
  templateUrl: './saving-credit.page.html',
  styleUrls: ['./saving-credit.page.scss'],
})
export class SavingCreditPage implements OnInit {
  amount:number;
  con:boolean = false ;
  home:boolean = false ;
  constructor(
    public shared: SharedService,
    private provider : ApihelperProvider,
    public router: Router,
    private _location: Location
  ) { }

  ngOnInit() {
    
  }
  next(){
    var amount = 100
    if (this.amount == null || this.amount < amount){
      this.provider.show_alert('Please Enter Amount And it Should Be Greater Than 100')
      
    }
    else if(this.con == false){
        this.provider.show_alert('Please Accept Terms And Conditions')
      }else{

      let navigationExtras: NavigationExtras = {
      };
      
      this.shared.setamount(this.amount)
      this.router.navigate(['/transaction/saving-credit/select-app'], navigationExtras);
    }
      
}
yes(){
  // console.log('dha')
  this.con = true
}
backClicked() {
  this.home = this.shared.gethome();
  if( this.home == true){
  this.router.navigate(['/dashboard/home']);
}else{
  
  this.router.navigate(['/dashboard/transaction']);
}
}
}
