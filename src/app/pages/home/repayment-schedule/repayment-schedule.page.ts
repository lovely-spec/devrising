import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { NotificationPage } from '../notification/notification.page';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-repayment-schedule',
  templateUrl: './repayment-schedule.page.html',
  styleUrls: ['./repayment-schedule.page.scss'],
})
export class RepaymentSchedulePage implements OnInit {
  public payout: any = []
  public slug: any
  constructor(
    public provider: ApihelperProvider,
    private router: Router,
    public route: ActivatedRoute,
    public popoverController: PopoverController,
    public navCtrl: NavController,
  ) { }

  ngOnInit() {
  }
  gohome(){
    this.navCtrl.navigateRoot('/dashboard/home'); 
  }
  ionViewDidEnter(){
    this.route.queryParams.subscribe(params => {
      if (params && params.special) {
        this.slug =  JSON.parse(params.special);
        console.log('bene',this.slug)
        this.provider.RepaymentSchedule('OL',this.slug.slug).subscribe(payout=>{
         this.payout = payout
        })
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
}
