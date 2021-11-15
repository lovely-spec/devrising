import { Component, OnInit } from '@angular/core';
import { AddNewMemberService } from './add-new-member.service';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.page.html',
  styleUrls: ['./add-new-member.page.scss'],
})
export class AddNewMemberPage implements OnInit {
  First_name:string;
  Last_name:string;
  Father_name:string;
  Husband_wife_name:string;
  D_O_B:string;
  Marital_status:string;
  Occupation:string;
  Email:string;
  gender:string;
  public personaldetails:string[];
  
  constructor(
    public http: HttpClient,
    private storage: Storage,
    private provider : ApihelperProvider,
    public router: Router,
    public modalController: ModalController ) {
  }

  
  ngOnInit() {
  }
  next(){
    var First_name = this.First_name;
    var Last_name = this.First_name;
    var First_name = this.First_name;
    var First_name = this.First_name;
    var First_name = this.First_name;
    var First_name = this.First_name;
    var First_name = this.First_name;
    var First_name = this.First_name;
    var First_name = this.First_name;
    console.log(this.First_name)
    this.provider.personal_details(this.First_name).subscribe(data=>{
      console.log('response',data)
    this.provider.show_alert(data['message'])
  
    })
  }

}
