import { Component, OnInit, ViewChild } from '@angular/core';
import { AddNewMemberPage } from '../add-new-member.page';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
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
  P_pin:string;
  firstname:string;

  constructor(
    public http: HttpClient,
    private storage: Storage,
    private provider : ApihelperProvider,
    public router: Router,
    public modalController: ModalController,
    private shared: SharedService
  ) { }
  addressRadio:string;
  show_detail:boolean;

  ngOnInit() {

    this.show_detail = false;
    }
    showform(f){
      if(f == 2){
        this.show_detail = true;
      }else{
        this.show_detail = false
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
      var P_pin = this.P_pin;
      var details = this.show_detail
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
          }else {
            let navigationExtras: NavigationExtras = {
              };
              this.router.navigate(['/address-details/kyc'], navigationExtras);
          }
      // this.provider.check(this.panchayt).subscribe(data=>{
      //   console.log('response',data)
      // this.provider.show_alert(data['message'])
      // // let navigationExtras: NavigationExtras = {
      // // };
      // // this.router.navigate(['address-details'], navigationExtras);
    
      // })
      this.firstname = this.shared.getdata();
      console.log('from name',this.firstname);
    }

}
