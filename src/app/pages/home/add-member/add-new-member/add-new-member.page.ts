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
  panchayt:string;
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
    var Last_name = this.Last_name;
    var Father_name = this.Father_name;
    var Husband_wife_name = this.Husband_wife_name;
    var D_O_B = this.D_O_B;
    var Marital_status = this.Marital_status;
    var Occupation = this.Occupation;
    var Email = this.Email;
    var gender = this.gender;
    var panchayt = this.panchayt;
    console.log(this.First_name)
    this.provider.personal_details(First_name,Last_name,Father_name,Husband_wife_name,D_O_B,Marital_status,Occupation,Email,gender).subscribe(data=>{
      console.log('response',data)
    let navigationExtras: NavigationExtras = {
    };
    this.router.navigate(['address-details'], navigationExtras);
  
    })
    
  }

}
