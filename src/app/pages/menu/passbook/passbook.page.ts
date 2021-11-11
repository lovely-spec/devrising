import { Component, OnInit } from '@angular/core';
import { PDFGenerator } from '@ionic-native/pdf-generator/ngx';
import { File } from '@ionic-native/file/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { Platform, NavController, PopoverController } from '@ionic/angular';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Network } from '@ionic-native/network/ngx';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { ActivatedRoute } from '@angular/router';
pdfMake.vfs = pdfFonts.pdfMake.vfs;
import * as moment from 'moment';
import { CreatePdf } from 'src/providers/CreatePdf';
import { NotificationPage } from '../../home/notification/notification.page';
@Component({
  selector: 'app-passbook',
  templateUrl: './passbook.page.html',
  styleUrls: ['./passbook.page.scss'],
})
export class PassbookPage implements OnInit {
  letterObj = {
    trans_type: '',
    trans_amt: '',
    text: ''
  }
  radioValue: any;
  pdfObj = null;
  data: any;
  Response: any = [];
  Transactions: any = [];
  type: any;
  slug: any;
  end_date: '';
  start_date: '';
  // pdfObj = null;
  show = 20; 
  momentjs: any = moment;
  
  constructor(private pdfGenerator: PDFGenerator,
    private provider: ApihelperProvider,
    public navCtrl: NavController,
    private route: ActivatedRoute,
    private network: Network,
    private pdfmake: CreatePdf,
    private plt: Platform, private file: File, private fileOpener: FileOpener,
    public popoverController: PopoverController
      ) {
   }
    // this.pdfGenerator.fromURL('http://localhost:8300/dashboard/saving', options).then(base64String => console.log(base64String))
  
  createPdf() {
    this.pdfmake.createPdf(this.Transactions); 
  }
  ngOnInit() {
  }
  gohome(){
    this.navCtrl.navigateRoot('/dashboard/home'); 
  }
  async presentPopover(ev: any) {
  
    const popover = await this.popoverController.create({
      component: NotificationPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  showValue(){
    console.log(this.radioValue);
    this.provider.Loan(this.radioValue).subscribe(data=>{
      this.Response = this.provider.Loan_Details(data);
      if(this.Response){
        this.Response = this.Response.details
        this.Transactions = [];
      }else{
        this.Response = [];
      }
    });
  }
  account_click(type:string,slug:string){
    this.type = type
    this.slug = slug
    this.provider.Pasbook_Details(type, slug).subscribe(data=>{
      this.Transactions = this.provider.Pasbook_Details_Details(data);
      if(this.Transactions){
        this.Transactions = this.Transactions.transactions
      }else{
        this.Transactions = [];
      }
    });
  }

  StartDate(){
    if(!this.start_date){
    }
  
    return this.start_date;
    
  }
  EndDate(){
    if(!this.end_date){
    }
  
    return this.end_date;
  }

  Apply_Date(){
    if((this.start_date == undefined || this.start_date == '')  || (this.end_date == undefined || this.end_date == '') ){
      
      this.provider.Pasbook_Details(this.type, this.slug).subscribe(data=>{
        this.Transactions = this.provider.Pasbook_Details_Details(data);
        if(this.Transactions){
          this.Transactions = this.Transactions.transactions
        }else{
          this.Transactions = [];
        }
      });
      this.provider.show_alert('Please select date first!');
    }else{
      let start_date = this.momentjs(this.start_date).format("YYYY-MM-DD")
      let end_date   = this.momentjs(this.end_date).format("YYYY-MM-DD");
    this.provider.presentLoading();
        this.provider.Pasbook_Details(this.type, this.slug).subscribe(data=>{
          this.Transactions = this.provider.Pasbook_Details_Details(data);
        if(this.Transactions.length != 0){
         let OlTransactions1 = this.Transactions.transactions;
          this.Transactions = OlTransactions1.filter((item: any) => {
            let date = new Date(item.transaction_date);
              date = this.momentjs(date).format("YYYY-MM-DD");
            return date >= start_date && date <= end_date;
          });
          if(this.Transactions==''){
            this.Transactions == '';
          }
        }else{
          this.Transactions == [];
        }
        });
    
    
  }
}

}
