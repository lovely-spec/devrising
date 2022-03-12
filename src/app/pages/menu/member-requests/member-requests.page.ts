import { Component, OnInit } from '@angular/core';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { SharedService } from '../../home/add-member/shared.service';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-member-requests',
  templateUrl: './member-requests.page.html',
  styleUrls: ['./member-requests.page.scss'],
})
export class MemberRequestsPage implements OnInit {
  rq: any= [];
  pending: string;
  dis:string;
  Id:string;
  edit: boolean = false;

  constructor(
    private provider: ApihelperProvider,
    public SharedService: SharedService,
    public router: Router,
  ) { }
  ionViewDidEnter() {
    this.provider.rq().subscribe(data=>{
      this.rq = this.provider.rq_details(data);
      console.log('rqasda',this.rq[0].remarks);
      
    });
  
  }
  ngOnInit() {
  }
  edit_member(Id){
    // console.log('rqasda',this.Id);
    this.edit = true;
   this.SharedService.seteditm(this.edit);
   this.SharedService.setmid(this.Id);
   let navigationExtras: NavigationExtras = {
  };
  this.router.navigate(['/dashboard/request/editm'], navigationExtras);
  
   }

}
