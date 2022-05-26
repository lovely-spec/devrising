import { Component, OnInit } from '@angular/core';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
@Component({
  selector: 'app-rd-open-successfully',
  templateUrl: './rd-open-successfully.page.html',
  styleUrls: ['./rd-open-successfully.page.scss'],
})
export class RdOpenSuccessfullyPage implements OnInit {
  RdDetails: any = [];
  UserResponse: any ;
  user: any ;
  constructor(
    private provider: ApihelperProvider,
  ) { }
  ionViewWillEnter() {
    
    this.provider.recent_rd().subscribe(data=>{
      
      this.UserResponse = data['data'];
      // console.log('asda');
      if(this.UserResponse){
        this.RdDetails = this.UserResponse[0];
        this.user = data['current_member'];
        console.log('saving',this.user)
      }
      // console.log('saving',this.RdDetails)
    });
    
    
  }
  ngOnInit() {
  }

}
