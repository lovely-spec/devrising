import { Component, OnInit } from '@angular/core';
import { NavParams, NavController,Platform, PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { UserResponse } from '../../../../../providers/Models/UserDetails';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { CreatePdf } from 'src/providers/CreatePdf';
import { RdResponse } from 'src/providers/Models/MemberRD';
import * as moment from 'moment';
import { NotificationPage } from '../../notification/notification.page';


@Component({
  selector: 'app-rdview',
  templateUrl: './rdview.page.html',
  styleUrls: ['./rdview.page.scss'],
})
export class RdviewPage implements OnInit {
  public Rdresponse: any = [];
  public RdResponse: any = [];
  public UserResponse: UserResponse;
  public RdDdResponse: any = [];
  public DdResponse: any = [];
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private provider : ApihelperProvider,
    private pdfmake : CreatePdf,
    public popoverController: PopoverController,
    public platform: Platform,
    private router: Router,

  ) {  }
  rddata: any;
  RdDetails: any = [];
  RdTransactions: any = [];
  MemberRdTransactions: any = [];
  momentjs: any = moment;
  end_date: '';
  start_date: '';
  pdfObj = null;
  show_filter: boolean = true;
  isShown: any ;
  slid_down: boolean = false;
  btn_text = 'more'
  changed_text = 'more'
  isthisbtnshow: boolean = false;
  isbuttonVisible: boolean = false;
  mgTop :any;
  mgBotm: any;
  margintop: any;
  marginbottom: any;

  ngOnInit(){
    this.provider.presentLoading();
    this.mgTop = "-12px";
    this.mgBotm = "0px"
    this.margintop = "-12px";
    this.marginbottom = "4px";
  }
  gohome(){
    this.navCtrl.navigateRoot('/dashboard/home'); 
  }
  ionViewWillEnter() {
    this.platform.backButton.subscribe(() => {
      this.navCtrl.navigateRoot('/dashboard/home'); 
      })
    this.provider.presentLoading();
    this.getapidata()
  }
  async presentPopover(ev: any) {
  
  const popover = await this.popoverController.create({
    component: NotificationPage,
    event: ev,
    translucent: true
  });
  return await popover.present();
}
   getapidata(){
    this.provider.UserPanel().subscribe(data=>{
      this.UserResponse = this.provider.User_details(data);
      if(this.UserResponse){
        
        this.RdDdResponse = this.UserResponse.RDDD;
        console.log('both',this.RdDdResponse)
        this.Rdresponse = []
        this.RdDdResponse.forEach(element => {
       
          if(element.is_dds == true){
             this.DdResponse.push(element)
          }if(element.is_dds == false){
            console.log('yha ni aay')
            this.Rdresponse.push(element)
          }
          
          
        });
        console.log('RD',this.Rdresponse)
      }
    });
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.rddata = JSON.parse(params.special);
        this.provider.MemberRD(this.rddata.type,this.rddata.slug).subscribe(data=>{
          this.RdResponse = this.provider.MemberRD_Details(data);
          console.log('RdView', this.RdResponse)
          if(this.RdResponse){
            this.RdDetails = this.RdResponse.details;
            this.RdTransactions = this.RdResponse.transactions;
            if(this.RdTransactions){
              this.RdTransactions = this.RdResponse.transactions;
            }else{
              this.RdTransactions = [];
            }
          }
        });
      }
    });
    
  }

//PDF CODE START
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
  if((this.start_date == undefined || this.start_date == '')  || (this.end_date == undefined || this.end_date == '') ){
    
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.rddata = JSON.parse(params.special);
        this.provider.MemberRD(this.rddata.type,this.rddata.slug).subscribe(data=>{
          
          this.MemberRdTransactions = this.provider.MemberSaving_Details(data);
          if(this.MemberRdTransactions.length != 0){
          this.RdTransactions = this.MemberRdTransactions.transactions; 
          }else{
            this.RdTransactions = [];
          }
        });
      }
    });
    this.provider.show_alert('Please select date first!');
  }else{
    this.show_filter = false
    let start_date = this.momentjs(this.start_date).format("YYYY-MM-DD")
    let end_date   = this.momentjs(this.end_date).format("YYYY-MM-DD");
  this.provider.presentLoading();
  this.route.queryParams.subscribe(params => {
    if (params && params.special) {
      this.rddata = JSON.parse(params.special);
      this.provider.MemberRD(this.rddata.type,this.rddata.slug).subscribe(data=>{
        this.RdResponse = this.provider.MemberRD_Details(data);
        if(this.RdResponse.length != 0){
        let RdTransactions1 = this.RdResponse.transactions;
        this.RdTransactions = RdTransactions1.filter((item: any) => {
          let date = new Date(item.transaction_date);
            date = this.momentjs(date).format("YYYY-MM-DD");
          return date >= start_date && date <= end_date;
        });
        if(this.RdTransactions==''){
          this.RdTransactions == [];
        }
      }else{
        this.RdTransactions == [];
      }
      });
    }
  });
  
  
}
}
createPdf() {
  this.pdfmake.createPdf(this.RdTransactions); 
}
add_installment(){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.RdDetails)
    }
  };
  this.router.navigate(['dashboard/rdaddpayment'], navigationExtras);
}
accordionShow(a) {
  this.isShown = a
  console.log('hf',this.isShown)
  this.mgTop = "10px";
}

change_text(a) {
  if (this.changed_text == 'more') {
    this.changed_text = a;
    this.isthisbtnshow = true;
    this.mgBotm = "16px";
  } else {
    this.changed_text = 'more'
    this.isShown = '';
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
rd : any;
RdClick(type:string,slug:string){
  this.rd = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.rd)
    }
  };
  this.router.navigate(['/dashboard/home/rdview/fullstatement'], navigationExtras);
}

}

