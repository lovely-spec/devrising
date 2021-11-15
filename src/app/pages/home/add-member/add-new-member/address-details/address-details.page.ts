import { Component, OnInit, ViewChild } from '@angular/core';
import { AddNewMemberPage } from '../add-new-member.page';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { NavigationExtras, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-address-details',
  templateUrl: './address-details.page.html',
  styleUrls: ['./address-details.page.scss'],
})
export class AddressDetailsPage implements OnInit {
  @ViewChild('AddNewMemberPage', {static : false}) filterPanel: AddNewMemberPage;
  panchayt:string;

  constructor(
    public http: HttpClient,
    private storage: Storage,
    private provider : ApihelperProvider,
    public router: Router,
    public modalController: ModalController
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
      var panchayt = this.panchayt;
      this.provider.check(this.panchayt).subscribe(data=>{
        console.log('response',data)
      this.provider.show_alert(data['message'])
      // let navigationExtras: NavigationExtras = {
      // };
      // this.router.navigate(['address-details'], navigationExtras);
    
      })
    }

}
