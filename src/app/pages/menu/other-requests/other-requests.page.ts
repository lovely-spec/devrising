import { Component, OnInit } from '@angular/core';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { UserResponse } from '../../../../providers/Models/UserDetails';
@Component({
  selector: 'app-other-requests',
  templateUrl: './other-requests.page.html',
  styleUrls: ['./other-requests.page.scss'],
})
export class OtherRequestsPage implements OnInit {
  public UserResponse: UserResponse;
  rd: any = [];
  fd: any = [];
  rq: any= [];
  pending: string;
  dis:string;
  rdb: boolean;
  fdb:boolean;
  rqb:boolean;

  constructor(
    private provider: ApihelperProvider
  ) { }
  ionViewDidEnter() {
    this.provider.rdre().subscribe(data=>{
      this.rd = this.provider.rdre_details(data);
      console.log('rd',this.rd);
      
    });
    this.provider.fdre().subscribe(data=>{
      this.fd = this.provider.fdre_details(data);
      console.log('rd',this.fd);
      
    });
    this.provider.creditreq().subscribe(data=>{
      this.rq = data['data'];
      console.log('rq',this.rq);
      
    });
    this.rdb = false;
    this.fdb = false;
    this.rqb = false;
  }
  showrd(){
    this.rdb = true;
    this.fdb = false;
    this.rqb = false;
  }
  showfd(){
    this.fdb = true;
    this.rdb = false;
    this.rqb = false;
  }
  showrq(){
    this.fdb = false;
    this.rdb = false;
    this.rqb = true;
  }
  ngOnInit() {
  }

}
