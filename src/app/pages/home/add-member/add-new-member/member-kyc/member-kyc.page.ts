import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import { SharedService } from '../../shared.service';
@Component({
  selector: 'app-member-kyc',
  templateUrl: './member-kyc.page.html',
  styleUrls: ['./member-kyc.page.scss'],
})
export class MemberKycPage implements OnInit {
  addhar_no:string;
  pan_no:string;
  nominee_name:string;
  nominee_f_name:string;
  nominee_relation:string;
  nominee_number:string;
  nominee_address:string;
  number:string;
  fname:string;
  constructor(
    private storage: Storage, 
    public router: Router,
    private SharedService: SharedService) { 
    
    }

  ngOnInit() 
  {
    
  }
  
next(){
  this.number = this.SharedService.getnumber();
  console.log(this.number);
  this.fname = this.SharedService.getfname();
  console.log(this.fname);
  // let navigationExtras: NavigationExtras = {
  // };
  // this.router.navigate(['/address-details/kyc/kyc-document'], navigationExtras);
}

}
