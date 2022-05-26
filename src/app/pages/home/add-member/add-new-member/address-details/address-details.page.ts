import { Component, OnInit, ViewChild } from '@angular/core';
import { AddNewMemberPage } from '../add-new-member.page';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController, NavController } from '@ionic/angular';
import { SharedService } from '../../shared.service';


@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.page.html',
  styleUrls: ['./address-details.page.scss'],
})
export class AddressDetailsPage implements OnInit {
  @ViewChild('AddNewMemberPage', {static : false}) filterPanel: AddNewMemberPage;
  village_house_town:string;
  p_o:string;
  panchayat:string;
  tehsil:string;
  distt:string;
  pin:string;
  P_village_house_town:string;
  P_p_o:string;
  P_panchayat:string;
  P_tehsil:string;
  P_distt:string;
  P_state:string;
  P_pin:string;
  firstname:string;
  edit:boolean = false;
  back:boolean = false;
  Member: any =[];
  Contact: any =[];
  stng: any =[] ;
  prst: any = [];
  constructor(
    public http: HttpClient,
    private storage: Storage,
    private provider : ApihelperProvider,
    public router: Router,
    public navCtrl: NavController,
    public modalController: ModalController,
    private SharedService: SharedService
  ) { }
  addressRadio:string;
  show_detail:boolean;
  ionViewDidEnter() {
    this.edit = this.SharedService.geteditm();
    if (this.edit == true){
      var id = this.SharedService.getmid();
    // this.provider.editm(id).subscribe(data=>{
    //   console.log('member',data);
    //   this.Member = data['message'];
    //   console.log('Member',this.Member);

    // })
    this.provider.contact(id).subscribe(data=>{
      console.log('contact',data);
      this.Contact = data['message']
      console.log('Contact',data);
      let arr = this.Contact['address_line_1']
      this.stng = arr.split(",");
      let ads =  this.Contact['permanent_address']
      this.prst = ads.split(",");
      console.log('contactsadasdasd',this.stng);
    })
    }
    this.village_house_town = this.SharedService.getvht();
    this.p_o = this.SharedService.getpo();
    this.panchayat = this.SharedService.getpan();
    this.tehsil = this.SharedService.getteh();
    this.distt = this.SharedService.getdistt();
    this.pin = this.SharedService.getpin();
    this.P_village_house_town = this.SharedService.getpvht();
    this.P_p_o = this.SharedService.getppo();
    this.P_panchayat = this.SharedService.getppan();
    this.P_tehsil = this.SharedService.getpteh();
    this.P_distt = this.SharedService.getpdiss();
    this.P_state = this.SharedService.getpstate();
    this.P_pin = this.SharedService.getppin();
  }

  ngOnInit() {

    this.show_detail = true;
    }
    showform(f){
      if(f == 2){
        this.show_detail = false;
      }else{
        this.show_detail = true;
      } 
    }
    next(){
      var village_house_town = this.village_house_town;
      var p_o = this.p_o;
      var panchayat = this.panchayat;
      var tehsil = this.tehsil;
      var distt = this.distt;
      var pin = this.pin;
      var P_village_house_town = this.P_village_house_town;
      var P_p_o = this.P_p_o;
      var P_panchayat = this.P_panchayat;
      var P_tehsil = this.P_tehsil;
      var P_distt = this.P_distt;
      var P_state = this.P_state;
      var P_pin = this.P_pin;
      var details = this.show_detail;
      var re = /^\d{6}(?:\s*,\s*\d{6})*$/;
      if (village_house_town==null||village_house_town==''|| p_o==null|| p_o==''||panchayat==null||panchayat==''||tehsil==null||tehsil==''||distt==null||distt==''||pin==null||pin==''){
            this.provider.show_alert('Please fill all details')
          }
          else if (!re.test(pin)){
            this.provider.show_alert('Please fill correct pin code')
          }
          else if (details==true){
            if (P_village_house_town==null||P_village_house_town==''|| P_p_o==null|| P_p_o==''||P_panchayat==null||P_panchayat==''||P_tehsil==null||P_tehsil==''||P_distt==null||P_distt==''||P_pin==null||P_pin==''){
              this.provider.show_alert('Please fill Permanent address details')
            }else if (!re.test(P_pin)){
              this.provider.show_alert('Please fill correct pin code')
            }
            let navigationExtras: NavigationExtras = {
            };
            this.router.navigate(['/address-details/kyc'], navigationExtras);
          }else if (details==false ){
             P_village_house_town = this.village_house_town;
            P_p_o = this.p_o;
            P_panchayat = this.panchayat;
            P_tehsil = this.tehsil;
            P_distt = this.distt;
            P_pin = this.pin;
            P_state = '';
            let navigationExtras: NavigationExtras = {
            };
            console.log('paddress',this.P_village_house_town);
            this.router.navigate(['/address-details/kyc'], navigationExtras);
            // console.log('paddress',this.show_detail);
          }
          else {
            this.provider.presentLoading();
            let navigationExtras: NavigationExtras = {
            };
            this.router.navigate(['/address-details/kyc'], navigationExtras);
          }
          // let navigationExtras: NavigationExtras = {
          // };
          // this.router.navigate(['/address-details/kyc'], navigationExtras);
      
      this.SharedService.setvht(this.village_house_town);
      this.SharedService.setpo(this.p_o);
      this.SharedService.setpan(this.panchayat);
      this.SharedService.setteh(this.tehsil);
      this.SharedService.setdistt(this.distt);
      this.SharedService.setpin(this.pin);
      this.SharedService.setpvht(P_village_house_town);
      this.SharedService.setppo(P_p_o);
      this.SharedService.setppan(P_panchayat);
      this.SharedService.setpteh(P_tehsil);
      this.SharedService.setpdiss(P_distt);
      this.SharedService.setppin(P_pin);
      this.SharedService.setpstate(P_state);
      
    }
    go_back() {
      this.back = true
      this.SharedService.setback(this.back);
      this.SharedService.setvht(this.village_house_town);
      this.SharedService.setpo(this.p_o);
      // console.log(this.SharedService.setpo(this.p_o));
      this.SharedService.setpan(this.panchayat);
      this.SharedService.setteh(this.tehsil);
      this.SharedService.setdistt(this.distt);
      this.SharedService.setpin(this.pin);
      this.SharedService.setpvht(this.P_village_house_town);
      this.SharedService.setppo(this.P_p_o);
      this.SharedService.setppan(this.P_panchayat);
      this.SharedService.setpteh(this.P_tehsil);
      this.SharedService.setpdiss(this.P_distt);
      this.SharedService.setppin(this.P_pin);
      this.SharedService.setpstate(this.P_state);
      
      this.navCtrl.navigateRoot('/add-new-member');
    }
}
