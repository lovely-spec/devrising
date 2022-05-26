import { Component, OnInit } from '@angular/core';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { NotificationPage } from '../../home/notification/notification.page';
import { CreatePdf } from 'src/providers/CreatePdf';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.page.html',
  styleUrls: ['./transactions.page.scss'],
})
export class TransactionsPage implements OnInit {
  public transaction_list: any = []
  
  constructor(
    public provider: ApihelperProvider,
    public popoverController: PopoverController,
    private pdfmake : CreatePdf,
    public navCtrl: NavController,
    
  ) { }

  ngOnInit() {
  }
 gohome(){
  this.navCtrl.navigateRoot('/dashboard/home'); 
}
 ionViewDidEnter() {
    this.provider.TransactionList().subscribe(data=>{
      console.log('data', data);
      if(data['status'] == true ){
      this.transaction_list = data['message'];
      }else{
        this.transaction_list = []
      }
  })
  }
  async presentPopover(ev: any) {
  
    const popover = await this.popoverController.create({
      component: NotificationPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  createPdf() {
    this.pdfmake.createPdf(this.transaction_list); 
  }
}
