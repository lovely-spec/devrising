import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.page.html',
  styleUrls: ['./add-new-member.page.scss'],
})
export class AddNewMemberPage implements OnInit {
  Member_name:string;
  Last_name:string;
  Father_name:string;
  Husband_wife_name:string;
  D_O_B:string;
  Marital_status:string;
  Occupation:string;
  Email:string;
  gender:string;
  
  constructor( ) { }

  ngOnInit() {
  }
  // next(){
  //   this.personaldetails = [
  //     'name:this.Member_name'
  //   ];
  //   this.AddNewMemberService.data = this.personaldetails;
  // }
}
