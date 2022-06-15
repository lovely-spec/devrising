import { Component, OnInit } from '@angular/core';
import { NavParams, NavController, PopoverController, Platform } from '@ionic/angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { MemberSavingResponse } from '../../../../../providers/Models/MemberSaving';
import * as moment from 'moment';
import { CreatePdf } from 'src/providers/CreatePdf';
import { ActivatedRoute } from '@angular/router';
import { NotificationPage } from '../../notification/notification.page';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  letterObj = {
    trans_type:[],
    trans_amt: [],
    text: '',
   
  }
  data = [];
   
  momentjs: any = moment;
  end_date: '';
  start_date: '';
  pdfObj = null;
  SavingResponse: any =  [];
  MemberSavingResponse: MemberSavingResponse;
  fileTransfer: any;
  savingdata: any;
  SavingDetails: any;
  SavingTransactions: any = [];
  MemberSavingTransactions: any = [];
  show_filter: boolean = true;

  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private provider: ApihelperProvider,
    private pdfmake:  CreatePdf,
    public popoverController: PopoverController,
    public platform: Platform
  ) { }

  gohome(){
    this.navCtrl.navigateRoot('/dashboard/home'); 
  }
ionViewDidEnter() {
  console.log("tran");
  // this.platform.backButton.subscribe(() => {
  //   this.navCtrl.navigateRoot('/dashboard/home'); 
  //   })
  this.route.queryParams.subscribe(params => {
    if (params && params.special) {
      this.savingdata = JSON.parse(params.special);
      this.provider.MemberSaving(this.savingdata.type,this.savingdata.slug).subscribe(data=>{
        this.MemberSavingResponse = this.provider.MemberSaving_Details(data);
        this.SavingDetails = this.MemberSavingResponse.details; 
        
        this.SavingTransactions = this.MemberSavingResponse.transactions; 
        console.log("tran",this.SavingTransactions);
      });
    }
  });
  
}
ngOnInit(){
  this.provider.presentLoading();
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
        this.savingdata = JSON.parse(params.special);
        this.provider.MemberSaving(this.savingdata.type,this.savingdata.slug).subscribe(data=>{
          
          this.MemberSavingTransactions = data;
          
          this.SavingDetails = this.MemberSavingTransactions.details; 
          this.SavingTransactions = this.MemberSavingTransactions.transactions; 
          console.log("tran",this.MemberSavingTransactions)
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
      this.savingdata = JSON.parse(params.special);
      this.provider.MemberSaving(this.savingdata.type,this.savingdata.slug).subscribe(data=>{
        this.SavingResponse = this.provider.MemberSaving_Details(data);
        // console.log("SavingResponse",this.SavingResponse)
       let SavingTransactions1 = this.SavingResponse.transactions;
        this.SavingTransactions = SavingTransactions1.filter((item: any) => {
          let date = new Date(item.transaction_date);
            date = this.momentjs(date).format("YYYY-MM-DD");
          return date >= start_date && date <= end_date;
        });
        console.log(this.SavingTransactions)
        if(this.SavingTransactions==''){
          this.SavingTransactions == '';
        }
      });
    }
  });
  
  
}
}

createPdf() {
  this.pdfmake.createPdf(this.SavingTransactions); 
}
//END PDF CODE 









}
