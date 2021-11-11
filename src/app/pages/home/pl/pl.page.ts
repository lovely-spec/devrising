import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, NavController, IonInfiniteScroll, PopoverController  } from '@ionic/angular';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import * as moment from 'moment';
import { CreatePdf } from 'src/providers/CreatePdf';
import { NotificationPage } from '../notification/notification.page';

@Component({
  selector: 'app-pl',
  templateUrl: './pl.page.html',
  styleUrls: ['./pl.page.scss'],
})
export class PlPage implements OnInit {

  PlResponse: any = [];
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
  PlDetails: any;
  PlTransactions: any = [];
  fddata: any;
  momentjs: any = moment;
  MemberPLTransactions: any = [];
  end_date: '';
  start_date: '';
  pdfObj = null;
  show = 20; 
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
        this.provider.MemberPL(this.data.type,this.data.slug).subscribe(data=>{
          this.PlResponse = this.provider.MemberPL_Details(data);
          if(this.PlResponse){
            this.PlDetails = this.PlResponse.details;
            this.PlTransactions = this.PlResponse.transactions;
            console.log("ol",this.PlDetails);
            console.log(this.PlTransactions);
            if(this.PlTransactions){
              
              this.PlTransactions = this.PlResponse.transactions;
            }else{
              this.PlTransactions = [];
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
              
              this.MemberPLTransactions = this.provider.MemberSaving_Details(data);
              if(this.MemberPLTransactions.length != 0){
                this.PlTransactions = this.MemberPLTransactions.transactions; 
              }else{
                this.PlTransactions = [];
              }
            });
          }
        });
        this.provider.show_alert('Please select date first!');
      }else{
        let start_date = this.momentjs(this.start_date).format("YYYY-MM-DD")
        let end_date   = this.momentjs(this.end_date).format("YYYY-MM-DD");
      this.provider.presentLoading();
      this.route.queryParams.subscribe(params => {
        if (params && params.special) {
          this.fddata = JSON.parse(params.special);
          this.provider.MemberPL(this.fddata.type,this.fddata.slug).subscribe(data=>{
          this.PlResponse = this.provider.MemberPL_Details(data);
          if(this.PlResponse.length != 0){
           let PlTransactions1 = this.PlResponse.transactions;
            this.PlTransactions = PlTransactions1.filter((item: any) => {
              let date = new Date(item.transaction_date);
                date = this.momentjs(date).format("YYYY-MM-DD");
              return date >= start_date && date <= end_date;
            });
            if(this.PlTransactions==''){
              this.PlTransactions == '';
            }
          }else{
            this.PlTransactions == [];
          }
          });
        }
      });
      
      
    }
  }
  
  createPdf() {
    this.pdfmake.createPdf(this.PlTransactions); 
  }
  add_installment(){
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.PlDetails)
      }
    };
    this.router.navigate(['dashboard/pladdpayment'], navigationExtras);
  }
}

