import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../shared.service';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
@Component({
  selector: 'app-preview-details',
  templateUrl: './preview-details.page.html',
  styleUrls: ['./preview-details.page.scss'],
})

export class PreviewDetailsPage implements OnInit {
  Member: any = [];
  contact: any = [];
  stng: any =[] ;
  prst: any = [];
  
  constructor(
    private SharedService: SharedService,
    private provider : ApihelperProvider
  ) { }
  ionViewDidEnter() {
    var id = this.SharedService.getmid();
    this.provider.newmember(id).subscribe(data=>{
      console.log('member',data);
      this.Member = data['message'];
      console.log('Member',this.Member);

    })
    this.provider.contact(id).subscribe(data=>{
      console.log('contact',data);
      this.contact = data['message'];
      console.log('contactsas',this.contact.permanent_panchayat );
      let arr = this.contact['address_line_1']
      this.stng = arr.split(",");
      let ads =  this.contact['permanent_address']
      this.prst = ads.split(",");
      console.log('contactsadasdasd',this.stng[0]);
    
      

    })
  }
  ngOnInit() {
  }

}
