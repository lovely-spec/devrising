import { Component, OnInit , Input} from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { Storage } from '@ionic/storage';
import { LoginPage} from '../../login/login.page';
import {SharedService } from './shared.service';
import { PopoverController } from '@ionic/angular';
import { NotificationPage } from '../notification/notification.page';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {
   number:string = '';
   HeaderConfig : any = [];
   edit: boolean = false;
   public notification: any = [];


  constructor(
    public shared: SharedService,
    public http: HttpClient,
    private storage: Storage,
    private provider : ApihelperProvider,
    public router: Router,
    public popoverController: PopoverController,
    public modalController: ModalController,

    
    
  ) { }

  ngOnInit() {
    
    }
    checkno(){
      var number = this.number;
      var re = /^((\\+91-?)|0)?[0-9]{10}$/;
      console.log(number)
      if(number==''){
        this.provider.show_alert('Please Enter Phone No')
      }else if (!re.test(number)){
        this.provider.show_alert('Please Enter valid Phone No')
      }
      else{this.provider.check_no(number).subscribe(data=>{
        console.log('response',data)
        if(data['status'] == true){
          this.shared.seteditm(this.edit)
          this.provider.presentLoading();
          let navigationExtras: NavigationExtras = {
            
          };
          this.router.navigate(['add-new-member'], navigationExtras);

      }else{
      this.provider.show_alert(data['message'])
    }
      })
      
    }
    this.shared.setnumber(this.number)
      
    }
    
    async presentPopover(ev: any) {
  
      const popover = await this.popoverController.create({
        component: NotificationPage,
        event: ev,
        translucent: true
      });
      return await popover.present();
    }
  
    ionViewDidEnter() {
      this.storage.get('notifications').then((val) => {
        if(val['status'] == "success"){
        this.notification =  val.data
        console.log( '6yh7rfuh', this.notification.length)
        }
      });
    }
}
