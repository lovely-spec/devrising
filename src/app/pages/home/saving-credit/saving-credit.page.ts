import { Component, OnInit } from '@angular/core';
import { SharedService } from '../add-member/shared.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-saving-credit',
  templateUrl: './saving-credit.page.html',
  styleUrls: ['./saving-credit.page.scss'],
})
export class SavingCreditPage implements OnInit {
  amount:string;
  constructor(
    public shared: SharedService,
    public router: Router,
  ) { }

  ngOnInit() {
    
  }
  next(){

    let navigationExtras: NavigationExtras = {
    };
    
    this.shared.setamount(this.amount)
    this.router.navigate(['/transaction/saving-credit/select-app'], navigationExtras);
  }
}
