import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, NavController, IonInfiniteScroll, PopoverController, Platform  } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { OlResponse } from 'src/providers/Models/MemberOL';
import * as moment from 'moment';
import { CreatePdf } from 'src/providers/CreatePdf';
import { NotificationPage } from '../notification/notification.page';

@Component({
  selector: 'app-ol',
  templateUrl: './ol.page.html',
  styleUrls: ['./ol.page.scss'],
})
export class OlPage implements OnInit {

  OlResponse: OlResponse = [];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private provider : ApihelperProvider,
    private pdfmake: CreatePdf,
    public popoverController: PopoverController,
    public platform: Platform,
    private router: Router,
  ) {
  }

  

  data: any;
  OlDetails: any;
  OlTransactions: any = [];
  fddata: any;
  momentjs: any = moment;
  MemberOlTransactions: any = [];
  end_date: '';
  start_date: '';
  pdfObj = null;
  show = 20; 
  show_filter: boolean = true;
  ngOnInit(){
    this.provider.presentLoading();
  }
 gohome(){
  this.navCtrl.navigateRoot('/dashboard/home'); 
}
 ionViewDidEnter() {
    this.platform.backButton.subscribe(() => {
      this.navCtrl.navigateRoot('/dashboard/home'); 
    });
    this.provider.presentLoading();
    this.loadData(event);
  }
  async presentPopover(ev: any) {
  
    const popover = await this.popoverController.create({
      component: NotificationPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  loadData(event) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        this.provider.MemberOL(this.data.type,this.data.slug).subscribe(data=>{
          this.OlResponse = this.provider.MemberOL_Details(data);
          if(this.OlResponse){
            this.OlDetails = this.OlResponse.details;
            this.OlTransactions = this.OlResponse.transactions;
            console.log("ol",this.OlDetails);
            console.log(this.OlTransactions);
            if(this.OlTransactions){
              
              this.OlTransactions = this.OlResponse.transactions;
            }else{
              this.OlTransactions = [];
            }
          }
        });
      }
    });
  }
  showmore(length){
    this.show = length;
    this.provider.presentLoading();
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
            this.fddata = JSON.parse(params.special);
            this.provider.MemberSaving(this.fddata.type,this.fddata.slug).subscribe(data=>{
              
              this.MemberOlTransactions = this.provider.MemberSaving_Details(data);
              if(this.MemberOlTransactions.length != 0){
                this.OlTransactions = this.MemberOlTransactions.transactions; 
              }else{
                this.OlTransactions = [];
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
          this.fddata = JSON.parse(params.special);
          this.provider.MemberOL(this.fddata.type,this.fddata.slug).subscribe(data=>{
          this.OlResponse = this.provider.MemberOL_Details(data);
          if(this.OlResponse.length != 0){
           let OlTransactions1 = this.OlResponse.transactions;
            this.OlTransactions = OlTransactions1.filter((item: any) => {
              let date = new Date(item.transaction_date);
                date = this.momentjs(date).format("YYYY-MM-DD");
              return date >= start_date && date <= end_date;
            });
            if(this.OlTransactions==''){
              this.OlTransactions == '';
            }
          }else{
            this.OlTransactions == [];
          }
          });
        }
      });
      
      
    }
  }
  
  createPdf() {
    this.pdfmake.createPdf(this.OlTransactions); 
  }
  add_installment(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.OlDetails)
      }
    };
    this.router.navigate(['dashboard/oladdpayment'], navigationExtras);
  }
  repayment(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.OlDetails)
      }
    };
    this.router.navigate(['dashboard/repayment-schedule'], navigationExtras);
  }
}

