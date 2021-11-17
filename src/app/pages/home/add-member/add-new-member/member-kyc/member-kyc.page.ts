import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit() {
  }

}
