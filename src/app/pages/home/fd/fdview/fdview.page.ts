import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, Platform, PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { UserResponse } from '../../../../../providers/Models/UserDetails';
import { FdResponse } from 'src/providers/Models/MemberFD';
import * as moment from 'moment';
import { CreatePdf } from 'src/providers/CreatePdf';
import { NotificationPage } from '../../notification/notification.page';

@Component({
  selector: 'app-fdview',
  templateUrl: './fdview.page.html',
  styleUrls: ['./fdview.page.scss'],
})
export class FdviewPage implements OnInit {
  tableHeader= ['tranx_id', 'amount','transaction_type', 'transaction_date', 'payment_mode', 'transaction_type']
  public UserResponse: UserResponse;
  public FdResponse: any = [];
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private router: Router,
    private route: ActivatedRoute,
    private provider : ApihelperProvider,
    private pdfmake: CreatePdf,
    public popoverController: PopoverController
  ) { }
  FdDetails: any;
  FdTransactions: any = [];
  fddata: any;
  momentjs: any = moment;
  MemberFdTransactions: any = [];
  end_date: '';
  start_date: '';
  pdfObj = null;
  show_filter: boolean = true;
  isShown: boolean = false;
  slid_down: boolean = false;
  btn_text = 'more'
  changed_text = 'more'
  isthisbtnshow: boolean = false;
  isbuttonVisible: boolean = false;
  mgTop :any;
  mgBotm: any;
  margintop: any;
  marginbottom: any;
  ngOnInit() {
    
  }
 gohome(){
  this.navCtrl.navigateRoot('/dashboard/home'); 
}
 ionViewDidEnter() {
   this.provider.UserPanel().subscribe(data=>{
    this.UserResponse = this.provider.User_details(data);
    if(this.UserResponse){
      this.FdResponse = []
      this.FdResponse = this.UserResponse.FD;
    }
    console.log('FD',this.FdResponse)
  });
    this.provider.presentLoading();
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.fddata = JSON.parse(params.special);
        this.provider.MemberFD(this.fddata.type,this.fddata.slug).subscribe(data=>{
          this.provider.presentLoading();
          this.FdResponse = this.provider.MemberFD_Details(data);
          if(this.FdResponse){
            this.FdDetails = this.FdResponse.details;
            this.FdTransactions = this.FdResponse.transactions;
            if(this.FdTransactions){
              this.FdTransactions = this.FdResponse.transactions;
            }else{
              this.FdTransactions = '';
            }
          }
        });
      }
    });
  }
  async presentPopover(ev: any) {
  
    const popover = await this.popoverController.create({
      component: NotificationPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

StartDate(){
  if(!this.start_date){
    // console.log(this.start_date);
  }

  return this.start_date;
  
}
EndDate(){
  if(!this.end_date){
    console.log(this.end_date);
  }

  return this.end_date;
}

Apply_Date(){
  // this.provider.UserPanel().subscribe(data=>{
  //   this.UserResponse = this.provider.User_details(data);
  //   if(this.UserResponse){
      
  //     this.FdResponse = this.UserResponse.FD;
  //   }
  //   console.log('FD',this.FdResponse)
  // });
    if((this.start_date == undefined || this.start_date == '')  || (this.end_date == undefined || this.end_date == '') ){
      
      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.fddata = JSON.parse(params.special);
          this.provider.MemberFD(this.fddata.type,this.fddata.slug).subscribe(data=>{
            
            this.MemberFdTransactions = this.provider.MemberFD_Details(data);
            if(this.MemberFdTransactions.length != 0){
            this.FdTransactions = this.MemberFdTransactions.transactions; 
            }else{
              this.FdTransactions = [];
            }
          });
        }
      });
      this.provider.show_alert('Please select date first!');
    }else{
      this.show_filter= false;
      let start_date = this.momentjs(this.start_date).format("YYYY-MM-DD")
      let end_date   = this.momentjs(this.end_date).format("YYYY-MM-DD");
    this.provider.presentLoading();
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.fddata = JSON.parse(params.special);
        this.provider.MemberFD(this.fddata.type,this.fddata.slug).subscribe(data=>{
        this.FdResponse = this.provider.MemberFD_Details(data);
        if(this.FdResponse.length != 0){
         let FdTransactions1 = this.FdResponse.transactions;
          this.FdTransactions = FdTransactions1.filter((item: any) => {
            let date = new Date(item.transaction_date);
              date = this.momentjs(date).format("YYYY-MM-DD");
            return date >= start_date && date <= end_date;
          });
          if(this.FdTransactions==''){
            this.FdTransactions == '';
          }
        }else{
          this.FdTransactions == [];
        }
        });
      }
    });
    
    
  }
}

createPdf() {
  this.pdfmake.createPdf(this.FdTransactions); 
}

accordionShow() {
  this.isShown = !this.isShown;
  this.mgTop = "10px";
}

change_text() {
  if (this.changed_text == 'more') {
    this.changed_text = 'less'
    this.isthisbtnshow = true;
    this.mgBotm = "16px";
  } else {
    this.changed_text = 'more'
    this.isthisbtnshow = false;
    this.mgTop = "-12px"
    this.mgBotm = "0";
  }

}

slide_show() {
  this.slid_down = !this.slid_down
  this.margintop = "10px";
}

change() {
  if (this.btn_text == 'more') {
    this.btn_text = 'less'
    this.isbuttonVisible = true;
    this.marginbottom = "16px";

  } else {
    this.btn_text = 'more'
    this.isbuttonVisible = false;
    this.margintop = "-12px"
    this.marginbottom = "4px";
  }
}

fd : any;
FdClick(type:string,slug:string){
  this.fd = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.fd)
    }
  };
  this.router.navigate(['fullstatement'], navigationExtras);
}
}