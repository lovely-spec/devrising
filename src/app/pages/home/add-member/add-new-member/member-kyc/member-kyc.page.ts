import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import { SharedService } from '../../shared.service';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { UserResponse } from '../../../../../../providers/Models/UserDetails';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
@Component({
  selector: 'app-member-kyc',
  templateUrl: './member-kyc.page.html',
  styleUrls: ['./member-kyc.page.scss'],
})
export class MemberKycPage implements OnInit {
  public UserResponse: UserResponse;
  user: any = [];
  member_no:string;
  addhar_no:string;
  pan_no:string;
  nominee_name:string;
  nominee_f_name:string;
  nominee_relation:string;
  nominee_number:string;
  nominee_address:string;
  nominee_aadhar:string;
  nominee_pan:string;
  number:string;
  edit:boolean = false;
  Member: any =[];
  Contact: any =[];
  stng: any =[] ;
  prst: any = [];
  id: any ;
  
  constructor(
    private storage: Storage, 
    public router: Router,
    private SharedService: SharedService,
    private provider : ApihelperProvider,
    private iab: InAppBrowser) { 
    
    }

    ionViewDidEnter() {
      this.edit = this.SharedService.geteditm();
      if (this.edit == true){
        var id = this.SharedService.getmid();
      this.provider.editm(id).subscribe(data=>{
        console.log('member',data);
        this.Member = data['message'];
        console.log('Member',this.Member);
  
      })
      // this.provider.contact(id).subscribe(data=>{
      //   console.log('contact',data);
      //   this.Contact = data['message']
      //   console.log('Contact',data);
      //   let arr = this.Contact['address_line_1']
      //   this.stng = arr.split(",");
      //   let ads =  this.Contact['permanent_address']
      //   this.prst = ads.split(",");
      //   console.log('contactsadasdasd',this.prst[0]);
      // })
      }
    }
    
  ngOnInit() 
  {
    
  }
  
next(){
  // this.number = this.SharedService.getnumber();
  // console.log(this.number);
  // this.First_name = this.SharedService.getfname();
  // this.Last_name = this.SharedService.getlname();
  // this.Father_name = this.SharedService.getftname();
  // this.Husband_wife_name = this.SharedService.gethwname();
  // this.D_O_B = this.SharedService.getdob();
  // this.Marital_status = this.SharedService.getoc();
  // this.Occupation = this.SharedService.getfname();
  // this.Email = this.SharedService.getemail();
  // this.gender = this.SharedService.getgender();
  // this.village_house_town = this.SharedService.getvht();
  // this.p_o = this.SharedService.getpo();
  // this.panchayat = this.SharedService.getpan();
  // this.tehsil = this.SharedService.getteh();
  // this.distt = this.SharedService.getdistt();
  // this.pin = this.SharedService.getpin();
  // this.P_village_house_town = this.SharedService.getpvht();
  // this.P_p_o = this.SharedService.getppo();
  // this.P_panchayat = this.SharedService.getppan();
  // this.P_tehsil = this.SharedService.getpteh();
  // this.P_distt = this.SharedService.getpdiss();
  // this.P_pin = this.SharedService.getppin();
      var number = this.SharedService.getnumber();
      var first_name = this.SharedService.getfname();
      var Last_name = this.SharedService.getlname();
      var Father_name = this.SharedService.getftname();
      var Husband_wife_name = this.SharedService.gethwname();
      var D_O_B = this.SharedService.getdob();
      var Marital_status = this.SharedService.getms();
      var Occupation = this.SharedService.getoc();
      var Email = this.SharedService.getemail();
      var gender = this.SharedService.getgender();
      var title = this.SharedService.gettitle();
      var village_house_town = this.SharedService.getvht();
      var p_o = this.SharedService.getpo();
      var panchayat = this.SharedService.getpan();
      var tehsil = this.SharedService.getteh();
      var distt = this.SharedService.getdistt();
      var pin = this.SharedService.getpin();
      var P_village_house_town = this.SharedService.getpvht();
      var P_p_o = this.SharedService.getppo();
      var P_panchayat = this.SharedService.getppan();
      var P_tehsil = this.SharedService.getpteh();
      var P_distt = this.SharedService.getpdiss();
      var P_state = this.SharedService.getpstate();
      var P_pin = this.SharedService.getppin();
      var addhar_no = this.addhar_no;
      var pan_no = this.pan_no;
      var nominee_name = this.nominee_name;
      var nominee_f_name = this.nominee_f_name;
      var nominee_relation = this.nominee_relation;
      var nominee_number = this.nominee_number;
      var nominee_address = this.nominee_address;
      var nominee_aadhar = this.nominee_aadhar;
      var nominee_pan = this.nominee_pan;
      var member_no = this.SharedService.getmember_id();
      var v = '';
      var re = /^\d{12}(?:\s*,\s*\d{12)*$/;
      var pan = /[A-Z]{5}[0-9]{4}[A-Z]{1}/;
      var no = /^((\\+91-?)|0)?[0-9]{10}$/;
      var id = this.id;
  console.log('fname',first_name,Last_name,Father_name,Marital_status,Occupation,D_O_B,title,nominee_pan,addhar_no,pan_no,nominee_name,nominee_f_name,nominee_relation,nominee_number,nominee_address,nominee_aadhar,nominee_pan,member_no);
  if (addhar_no==null||addhar_no==''|| pan_no==null|| pan_no==''||nominee_name==null||nominee_name==''||nominee_f_name==null||nominee_f_name==''||nominee_relation==null||nominee_relation==''||nominee_number==null||nominee_number==''||nominee_address==null||nominee_address==''||nominee_pan==null||nominee_pan==''){
          this.provider.show_alert('Please fill all details')
        
   if (!re.test(addhar_no)){
          this.provider.show_alert('Please fill correct Aadhar No')
        }
        if (!re.test(nominee_aadhar)){
          this.provider.show_alert('Please fill correct Nominee Aadhar No')
        }if (!pan.test(nominee_pan)){
          this.provider.show_alert('Please fill correct Nominee Pan No')
        }
        if (!no.test(nominee_number)){
          this.provider.show_alert('Please fill correct Nominee Phone No')
        }
        if (!pan.test(pan_no)){
          this.provider.show_alert('Please fill correct Pan No')
        }
      }else{ 
        if ( this.edit == true) {this.provider.save_edit_member(number,first_name,Last_name,Father_name,Husband_wife_name,D_O_B,Marital_status,Occupation,Email,gender,title,village_house_town,p_o,panchayat,tehsil,distt,pin,P_village_house_town,P_p_o,P_panchayat,P_tehsil,P_distt,P_pin,addhar_no,pan_no,nominee_name,nominee_f_name,nominee_relation,nominee_number,nominee_address,nominee_aadhar,member_no,nominee_pan,P_state,id).subscribe(data=>{
        console.log('responsed',data)
        if(data['status'] == true){
          let id = data['message'].id;
          this.SharedService.setmid(id);
          console.log('id',id)
          var v = data['message'].slug;
          this.iab.create('http://localhost:3000/' + v ,'_blank');
          let navigationExtras: NavigationExtras = {
          };

          this.router.navigate(['/address-details/kyc/kyc-document/preview'], navigationExtras);

      }else{
      this.provider.show_alert(data['message'])
    }
      })

      }
    else {
      this.provider.add_new_member(number,first_name,Last_name,Father_name,Husband_wife_name,D_O_B,Marital_status,Occupation,Email,gender,title,village_house_town,p_o,panchayat,tehsil,distt,pin,P_village_house_town,P_p_o,P_panchayat,P_tehsil,P_distt,P_pin,addhar_no,pan_no,nominee_name,nominee_f_name,nominee_relation,nominee_number,nominee_address,nominee_aadhar,member_no,nominee_pan,P_state,).subscribe(data=>{
        console.log('responsed',data)
        if(data['status'] == true){
          let id = data['message'].id;
          this.SharedService.setmid(id);
          console.log('id',id)
          var v = data['message'].slug;
          this.iab.create('http://localhost:3000/' + v ,'_blank');
          let navigationExtras: NavigationExtras = {
          };
          this.router.navigate(['/address-details/kyc/kyc-document/preview'], navigationExtras);

      }else{
      this.provider.show_alert(data['message'])
    }
      })
    }
  }
//   this.provider.add_new_member(number,first_name,Last_name,Father_name,Husband_wife_name,D_O_B,Marital_status,Occupation,Email,gender,title,village_house_town,p_o,panchayat,tehsil,distt,pin,P_village_house_town,P_p_o,P_panchayat,P_tehsil,P_distt,P_pin,addhar_no,pan_no,nominee_name,nominee_f_name,nominee_relation,nominee_number,nominee_address,nominee_address,).subscribe(data=>{
//     console.log('response',data)
//     if(data['status'] == true){
//       let navigationExtras: NavigationExtras = {
        
//       };
//       this.router.navigate(['/address-details/kyc/kyc-document'], navigationExtras);

//   }else{
//   this.provider.show_alert(data['message'])
// }
//   })

      
  // let navigationExtras: NavigationExtras = {
  // };
  // this.SharedService.setmid(6702);
  // this.router.navigate(['/address-details/kyc/kyc-document'], navigationExtras);
}

}
