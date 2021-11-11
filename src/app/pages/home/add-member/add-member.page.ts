import { Component, OnInit , Input} from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { Storage } from '@ionic/storage';
import { LoginPage} from '../../login/login.page';
@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {
   number:string = '';
   HeaderConfig : any = [];
   @Input() LoginReponse: any;
   @Input() username : string;

  constructor(
    public http: HttpClient,
    private storage: Storage,
    private provider : ApihelperProvider,
    public router: Router,
    public modalController: ModalController
    
    
  ) { }

  ngOnInit() {
    
    }
    checkno(){
      var number = this.number;
      console.log(number)
      if(number==''){
        this.provider.show_alert('Please Enter Phone No')
      }else{this.provider.check_no(number).subscribe(data=>{
        console.log('response',data)
        if(data['status'] == true){
          let navigationExtras: NavigationExtras = {
            
          };
          this.router.navigate(['add-new-member'], navigationExtras);

      }else{
      this.provider.show_alert(data['message'])
    }
      })
      
    }
      
    }
  

}
