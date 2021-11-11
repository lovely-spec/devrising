import { Component, OnInit, ViewChild } from '@angular/core';
import { NavParams, NavController, IonInfiniteScroll  } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import * as moment from 'moment';
import { CreatePdf } from 'src/providers/CreatePdf';

@Component({
  selector: 'app-rl',
  templateUrl: './rl.page.html',
  styleUrls: ['./rl.page.scss'],
})
export class RlPage implements OnInit {

  RlResponse: any = [];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private provider : ApihelperProvider,
    private pdfmake: CreatePdf
  ) {
  }

  

  data: any;
  RlDetails: any;
  RlTransactions: any = [];
  fddata: any;
  momentjs: any = moment;
  MemberRlTransactions: any = [];
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
  loadData(event) {
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        this.provider.MemberRL(this.data.type,this.data.slug).subscribe(data=>{
          this.RlResponse = this.provider.MemberRL_Details(data);
          if(this.RlResponse){
            this.RlDetails = this.RlResponse.details;
            this.RlTransactions = this.RlResponse.transactions;
            console.log("ol",this.RlDetails);
            console.log(this.RlTransactions);
            if(this.RlTransactions){
              
              this.RlTransactions = this.RlResponse.transactions;
            }else{
              this.RlTransactions = [];
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
              
              this.MemberRlTransactions = this.provider.MemberSaving_Details(data);
              if(this.MemberRlTransactions.length != 0){
                this.RlTransactions = this.MemberRlTransactions.transactions; 
              }else{
                this.RlTransactions = [];
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
          this.provider.MemberRL(this.fddata.type,this.fddata.slug).subscribe(data=>{
          this.RlResponse = this.provider.MemberRL_Details(data);
          if(this.RlResponse.length != 0){
           let RlTransactions1 = this.RlResponse.transactions;
            this.RlTransactions = RlTransactions1.filter((item: any) => {
              let date = new Date(item.transaction_date);
                date = this.momentjs(date).format("YYYY-MM-DD");
              return date >= start_date && date <= end_date;
            });
            if(this.RlTransactions==''){
              this.RlTransactions == '';
            }
          }else{
            this.RlTransactions == [];
          }
          });
        }
      });
      
      
    }
  }
  
  createPdf() {
    this.pdfmake.createPdf(this.RlTransactions); 
  }
}

