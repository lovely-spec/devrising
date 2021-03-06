import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController ,NavController} from '@ionic/angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as moment from 'moment';

@Component({
  selector: 'app-add-new-member',
  templateUrl: './add-new-member.page.html',
  styleUrls: ['./add-new-member.page.scss'],
})
export class AddNewMemberPage implements OnInit {
  First_name:string;
  Last_name:string;
  Father_name:string;
  H_W_name:string= '';
  D_O_B:string;
  Marital_status:string;
  Occupation:string;
  Email:string;
  gender:string;
  number:string;
  edit: boolean = false;
  back: boolean = false;
  Member: any =[];
  Contact: any =[];
  today:any;
  mDate:any;
  public personaldetails:string[];
  
  constructor(
    public http: HttpClient,
    private storage: Storage,
    private provider : ApihelperProvider,
    public router: Router,
    public navCtrl: NavController,
    public modalController: ModalController,
    public SharedService: SharedService ) {
  }
   
  ionViewDidEnter() {
    console.log(this.SharedService.getback());
    console.log(this.SharedService.geteditm());
    this.edit = this.SharedService.geteditm();
    if (this.edit == true){
      console.log('ssys');
      var id = this.SharedService.getmid();
    this.provider.editm(id).subscribe(data=>{
      console.log('member',data);
      this.Member = data['message'];
      this.H_W_name = this.Member.spouse_name;
      console.log('Member',this.Member.spouse_name);

    })
    this.provider.contact(id).subscribe(data=>{
      console.log('contact',data);
      this.Contact = data['message']
      console.log('Contact',data);
    })
    }else{

    }
    var back = this.SharedService.getback();
    // console.log('sdf',back);
    if (back == true ){
      console.log('aays');
    this.First_name = this.SharedService.getfname();
    this.Last_name = this.SharedService.getlname();
    this.Father_name = this.SharedService.getftname();
    this.H_W_name = this.SharedService.gethwname();
    this.D_O_B =this.SharedService.getdob();
    this.Marital_status = this.SharedService.getms();
    this.Occupation = this.SharedService.getoc();
    this.Email = this.SharedService.getemail();
    this.gender = this.SharedService.getgender();
    }else
  {}
  

this.today =  moment().format("YYYY-MM-DD");

let maxDate=  new Date((new Date().getFullYear() - 18),new Date().getMonth(), new Date().getDate());
       this.mDate=moment(maxDate).format("YYYY-MM-DD");
  }
  ngOnInit() {

  }
  next(){
    var first_name = this.First_name;
    var Last_name = this.Last_name;
    var Father_name = this.Father_name;
    var Husband_wife_name = this.H_W_name;
    var D_O_B = this.D_O_B;
    var Marital_status = this.Marital_status;
    var Occupation = this.Occupation;
    var Email = this.Email;
    var gender = this.gender;
    var title = '';
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log('data',this.gender,this.First_name,this.Last_name,this.Father_name,this.Marital_status,this.Occupation)
    if (first_name==null||first_name==''|| Last_name==null|| Last_name==''||Father_name==null||Father_name==''||D_O_B==null||D_O_B==''||Occupation==null||Occupation==''||Email==null||Email==''||gender==null||gender=='' ||Marital_status==null||Marital_status==''){
      this.provider.show_alert('Please fill all details')
      if (!re.test(Email)){
        this.provider.show_alert('Please Provide Vailid Email Address')
      }if (Marital_status=="MARRIED"){
        // this.provider.show_alert('Please fill Husband/Wife Name')
        if (this.H_W_name== null){
          this.provider.show_alert('Please fill Husband/Wife Name')
        }
      }
    }
    
    
  //   if (Marital_status=="Married" ){
      
  //   }else if ( Husband_wife_name=='' ){
      
  //     this.provider.show_alert('Please fill Husband/Wife Name')
    
  // }
    else{
      if (gender == 'male'){
        title = 'mr'
      }
      else{
        title = "ms"
      }

      this.number = this.SharedService.getnumber();
      // console.log('this.number', this.H_W_name);
      this.SharedService.setfname(this.First_name);
      this.SharedService.setlname(this.Last_name);
      this.SharedService.setftname(this.Father_name);
      this.SharedService.sethwname(Husband_wife_name);
      this.SharedService.setdob(this.D_O_B);
      this.SharedService.setms(this.Marital_status);
      this.SharedService.setoc(this.Occupation);
      this.SharedService.setemail(this.Email);
      this.SharedService.setgender(this.gender);
      this.SharedService.settitle(title);
      this.provider.presentLoading();
      let navigationExtras: NavigationExtras = {
      };
      this.router.navigate(['address-details'], navigationExtras);
    
  }
  // let navigationExtras: NavigationExtras = {
  // };
  // this.router.navigate(['address-details'], navigationExtras);
  }
  go_back(){
    this.SharedService.setback(this.back);
    this.navCtrl.navigateRoot('/dashboard/home/add-member');
  }home(){
    this.SharedService.setback(this.back);
    this.navCtrl.navigateRoot('/dashboard/home');
  }

}
