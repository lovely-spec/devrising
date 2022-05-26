import { Component, OnInit } from '@angular/core';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';

@Component({
  selector: 'app-fd-open-successfully',
  templateUrl: './fd-open-successfully.page.html',
  styleUrls: ['./fd-open-successfully.page.scss'],
})
export class FdOpenSuccessfullyPage implements OnInit {
  FdDetails: any ;
  UserResponse: any ;
  user: any ;
  constructor( private provider: ApihelperProvider, ) { }
  ionViewDidEnter() {
    this.provider.recent_fd().subscribe(data=>{
      this.UserResponse = data['data'];
      if(this.UserResponse){
        this.FdDetails = this.UserResponse[0];
        this.user = data['current_member'];
        
      }
      console.log('saving',this.user)
    });
    
    
  }
  ngOnInit() {
  }

}
