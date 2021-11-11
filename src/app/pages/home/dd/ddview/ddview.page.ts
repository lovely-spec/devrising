import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, Platform, PopoverController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { DdResponse } from 'src/providers/Models/MemberDD';
import * as moment from 'moment';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { CreatePdf } from 'src/providers/CreatePdf';
import { NotificationPage } from '../../notification/notification.page';


@Component({
  selector: 'app-ddview',
  templateUrl: './ddview.page.html',
  styleUrls: ['./ddview.page.scss'],
})
export class DdviewPage implements OnInit {

  tableHeader= ['tranx_id', 'amount','transaction_type', 'transaction_date', 'payment_mode', 'transaction_type']
  DdResponse: DdResponse;
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private provider : ApihelperProvider,
    private pdfmake : CreatePdf,
    public popoverController: PopoverController,
    public platform: Platform,
    private router: Router,
  ) { }
  DdDetails: any;
  DdTransactions: any = [];
  dddata: any;
  momentjs: any = moment;
  MemberDdTransactions: any = [];
  end_date: '';
  start_date: '';
  pdfObj = null;
  show_filter: boolean = true;
  ngOnInit() {
    
  }
 gohome(){
  this.navCtrl.navigateRoot('/dashboard/home'); 
}
 ionViewDidEnter() {
    this.platform.backButton.subscribe(() => {
    this.navCtrl.navigateRoot('/dashboard/home'); 
  });
    this.provider.presentLoading();
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.dddata = JSON.parse(params.special);
        this.provider.MemberDD('RD',this.dddata.slug).subscribe(data=>{
          this.DdResponse = this.provider.MemberDD_Details(data);
          // console.log(data);
          if(this.DdResponse.length != 0){
            this.DdDetails = this.DdResponse.details;
            this.DdTransactions = this.DdResponse.transactions;
            // console.log("DDDetails",this.DdDetails);
            // console.log(this.DdTransactions);
            if(this.DdTransactions){
              this.DdTransactions = this.DdResponse.transactions;
            }else{
              this.DdTransactions = '';
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
    if((this.start_date == undefined || this.start_date == '')  || (this.end_date == undefined || this.end_date == '') ){
      
      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.dddata = JSON.parse(params.special);
          this.provider.MemberDD(this.dddata.type,this.dddata.slug).subscribe(data=>{
            
            this.MemberDdTransactions = this.provider.MemberDD_Details(data);
            
            if(this.MemberDdTransactions.length != 0){
            this.DdTransactions = this.MemberDdTransactions.transactions; 
            }
            else{
              console.log(this.MemberDdTransactions);
              this.DdTransactions = [];
            }
          });
        }
      });
      this.provider.show_alert('Please select date first!');
    }else{
      this.show_filter = false;
      let start_date = this.momentjs(this.start_date).format("YYYY-MM-DD")
      let end_date   = this.momentjs(this.end_date).format("YYYY-MM-DD");
    this.provider.presentLoading();
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.dddata = JSON.parse(params.special);
        this.provider.MemberDD(this.dddata.type,this.dddata.slug).subscribe(data=>{
          this.DdResponse = this.provider.MemberDD_Details(data);
          if(this.DdResponse.length != 0){
            let DdTransactions1 = this.DdResponse.transactions;
            this.DdTransactions = DdTransactions1.filter((item: any) => {
              let date = new Date(item.transaction_date);
                date = this.momentjs(date).format("YYYY-MM-DD");
              return date >= start_date && date <= end_date;
            });
            if(this.DdTransactions==''){
              this.DdTransactions == [];
            }
          }else{
            this.DdTransactions == [];
          }
        });
      }
    });
    
    
  }
}

createPdf() {
  this.pdfmake.createPdf(this.DdTransactions); 
}

add_installment(){
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.DdDetails)
    }
  };
  this.router.navigate(['dashboard/ddaddpayment'], navigationExtras);
}
}
