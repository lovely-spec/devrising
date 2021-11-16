import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
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
  number:string;
  public personaldetails:string[];
  
  constructor(
    public http: HttpClient,
    private storage: Storage,
    private provider : ApihelperProvider,
    public router: Router,
    public modalController: ModalController,
    public SharedService: SharedService ) {
  }
   

  
  ngOnInit() {

  }
  next(){
    var first_name = this.First_name;
    var Last_name = this.Last_name;
    var Father_name = this.Father_name;
    var Husband_wife_name = this.Husband_wife_name;
    var D_O_B = this.D_O_B;
    var Marital_status = this.Marital_status;
    var Occupation = this.Occupation;
    var Email = this.Email;
    var gender = this.gender;
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('data',this.gender)
  //   if (first_name==null||first_name==''|| Last_name==null|| Last_name==''||Father_name==null||Father_name==''||D_O_B==null||D_O_B==''||Occupation==null||Occupation==''||Email==null||Email==''||gender==null||gender==''){
  //     this.provider.show_alert('Please fill all details')
  //   }else if (Marital_status=="Married"){
  //     if(Husband_wife_name==null){
  //       this.provider.show_alert('Please fill Husband/Wife Name')
  //     }
  //   }else if (!re.test(Email)){
  //     this.provider.show_alert('Please Provide Vailid Email Address')
  //   }
  //   else{
    
    
  // }
  let navigationExtras: NavigationExtras = {
  };
  this.router.navigate(['address-details'], navigationExtras);

  
  this.number = this.SharedService.getnumber();
  console.log(this.number);
  this.SharedService.setdata(this.First_name);
  }

}
