import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, NavController, IonInfiniteScroll, PopoverController  } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import * as moment from 'moment';
import { CreatePdf } from 'src/providers/CreatePdf';
import { NotificationPage } from '../notification/notification.page';

@Component({
  selector: 'app-dl',
  templateUrl: './dl.page.html',
  styleUrls: ['./dl.page.scss'],
})
export class DlPage implements OnInit {

  DlResponse: any = [];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private provider : ApihelperProvider,
    private pdfmake: CreatePdf,
    public popoverController: PopoverController,
    private router: Router,
  ) {
  }

  

  data: any;
  DlDetails: any;
  DlTransactions: any = [];
  fddata: any;
  momentjs: any = moment;
  MemberDlTransactions: any = [];
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
        this.provider.MemberDL(this.data.type,this.data.slug).subscribe(data=>{
          this.DlResponse = this.provider.MemberDL_Details(data);
          if(this.DlResponse){
            this.DlDetails = this.DlResponse.details;
            this.DlTransactions = this.DlResponse.transactions;
            console.log("Dl",this.DlDetails);
            console.log(this.DlTransactions);
            if(this.DlTransactions){
              
              this.DlTransactions = this.DlResponse.transactions;
            }else{
              this.DlTransactions = [];
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
      // console.log(this.end_date);
    }
  
    return this.end_date;
  }
  
  Apply_Date(){
      if((this.start_date == undefined || this.start_date == '')  || (this.end_date == undefined || this.end_date == '') ){
        
        this.route.queryParams.subscribe(params => {
          if (params && params.special) {
            this.fddata = JSON.parse(params.special);
            this.provider.MemberSaving(this.fddata.type,this.fddata.slug).subscribe(data=>{
              
              this.MemberDlTransactions = this.provider.MemberSaving_Details(data);
              if(this.MemberDlTransactions.length != 0){
                this.DlTransactions = this.MemberDlTransactions.transactions; 
              }else{
                this.DlTransactions = [];
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
          this.provider.MemberDL(this.fddata.type,this.fddata.slug).subscribe(data=>{
          this.DlResponse = this.provider.MemberDL_Details(data);
          if(this.DlResponse.length != 0){
           let DlTransactions1 = this.DlResponse.transactions;
            this.DlTransactions = DlTransactions1.filter((item: any) => {
              let date = new Date(item.transaction_date);
                date = this.momentjs(date).format("YYYY-MM-DD");
              return date >= start_date && date <= end_date;
            });
            if(this.DlTransactions==''){
              this.DlTransactions == '';
            }
          }else{
            this.DlTransactions == [];
          }
          });
        }
      });
      
      
    }
  }
  
  createPdf() {
    this.pdfmake.createPdf(this.DlTransactions); 
  }

  add_installment(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.DlDetails)
      }
    };
    this.router.navigate(['dashboard/dladdpayment'], navigationExtras);
  }
}

