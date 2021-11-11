import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';

@Component({
  selector: 'app-notification',
  templateUrl: 'notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
  public notification: any = "";
  constructor(
    private storage: Storage,
    private provider: ApihelperProvider
  ) {
    
   }

  ngOnInit() {
    this.storage.get('notifications').then((val) => {
      if(val['status'] == "success"){
      this.notification =  val.data
      console.log(this.notification)
      }
    });
  }
  clear_notification(){
    this.provider.ClearNotification().subscribe(data=>{
      console.log('sdf');
      if(data){
        if(data['status'] == "success"){
          this.storage.remove('notifications');
          this.notification = ""
        }
      }
    })
  }

}
