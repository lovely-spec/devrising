import { Component, OnInit } from '@angular/core';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';

@Component({
  selector: 'app-member-requests',
  templateUrl: './member-requests.page.html',
  styleUrls: ['./member-requests.page.scss'],
})
export class MemberRequestsPage implements OnInit {
  rq: any= [];
  pending: string;
  dis:string;

  constructor(
    private provider: ApihelperProvider
  ) { }
  ionViewDidEnter() {
    this.provider.rq().subscribe(data=>{
      this.rq = this.provider.rq_details(data);
      console.log('rq',this.rq);
      
    });
    
  }
  ngOnInit() {
  }

}
