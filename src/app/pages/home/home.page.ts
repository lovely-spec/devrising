
import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, Platform } from '@ionic/angular';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import * as $ from 'jquery';
import { UserResponse } from '../../../providers/Models/UserDetails';
import { TransactionResponse } from '../../../providers/Models/TransactionDetails';
import * as moment from 'moment';
import { Router, NavigationExtras } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { NotificationPage } from './notification/notification.page';
import { IonSlides } from '@ionic/angular';
import {SharedService } from './add-member/shared.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  @ViewChild('slideWithNav', { static: false }) slideWithNav: IonSlides;
  @ViewChild('slideWithNav2', { static: false }) slideWithNav2: IonSlides;
  @ViewChild('slideWithNav3', { static: false }) slideWithNav3: IonSlides;
  moment: any = moment;
  slideOptsOne : any ;
  slideOptsOne2: any ;
  slideOptsOne3: any ;
  member_id: string ;
  slug: string ;
  public UserResponse: UserResponse;
  public RdResponse: any = [];
  public RdDdResponse: any = []; 
  public DdResponse: any = []; 
  public FdResponse: any = []; 
  public OlResponse: any = []; 
  public PlResponse: any = []; 
  public GlResponse: any = []; 
  public DlResponse: any = []; 
  public Saving: any = [];
  public RdPercent: any = [];
  public FdPercent: any = [];
  public notification: any = [];
  public DdPercent: any = [];
  public OlPercent: any = [];
  public PlPercent: any = [];
  public GlPercent: any = [];
  public DlPercent: any = [];
  public today_interest: number;
  public TransactionResponse: TransactionResponse; 
  
  
  constructor(
    private storage: Storage,
    public navCtrl: NavController,
    public provider : ApihelperProvider,
    private router: Router,
    public popoverController: PopoverController,
    public platform: Platform,
    public shared: SharedService
    
    ){
      
    }

    slidePrev() {
      this.slideWithNav.slidePrev();
    }
    slideNext() {
      this.slideWithNav.slideNext();
    }
    ngOnInit() {
      
        this.slideOptsOne = {
          initialSlide: 0,
          slidesPerView: 1,
          autoplay: true
        };
        
       
    }
async presentPopover(ev: any) {
  
  const popover = await this.popoverController.create({
    component: NotificationPage,
    event: ev,
    translucent: true
  });
  return await popover.present();
}
ionViewDidEnter() {
  this.storage.get('notifications').then((val) => {
    if(val['status'] == "success"){
    this.notification =  val.data
    console.log( '6yh7rfuh', this.notification.length)
    }
  });
  this.provider.presentLoading()
  this.platform.backButton.subscribe(() => {
    this.navCtrl.navigateRoot('/dashboard/home'); 
  });
    this.UserApi();
}
UserApi(){
  this.provider.Notification().subscribe(data=>{
    this.storage.set('notifications', data);
  })
this.provider.UserPanel().subscribe(data=>{
  this.UserResponse = this.provider.User_details(data);
  if(this.UserResponse){
    
    this.RdDdResponse = this.UserResponse.RDDD;
    console.log('both',this.RdDdResponse)
    this.member_id = this.UserResponse.current_member.id
    this.slug = this.UserResponse.current_member.slug
    this.shared.setmember_id(this.member_id)
    this.shared.setslug(this.slug)
    console.log('mem',this.member_id,this.slug)
    this.DdResponse = [];
    this.RdResponse = []
    this.FdResponse = this.UserResponse.FD;
    this.OlResponse = this.UserResponse.OL;
    this.PlResponse = this.UserResponse.PL;
    this.GlResponse = this.UserResponse.GL;
    this.DlResponse = this.UserResponse.DL;
    this.Saving = this.UserResponse.Saving;
    this.RdDdResponse.forEach(element => {
       
      if(element.is_dds == true){
         this.DdResponse.push(element)
      }if(element.is_dds == false){
        console.log('yha ni aay')
        this.RdResponse.push(element)
      }
      
      
    });
    console.log('RD',this.RdResponse)
    console.log('FD',this.FdResponse)
    console.log('DD',this.DdResponse)
    console.log('OL',this.OlResponse)
    console.log('PL',this.PlResponse)
    console.log('GL',this.GlResponse)
    console.log('DL',this.DlResponse)

    // this.DdResponse = this.UserResponse.DD;
    
    this.RdResponse.forEach((data) => {
      this.RdPercent.push(this.getPercent(data.total_installment, data.actual_installment))
    });
    this.DdResponse.forEach((data) => {
      this.DdPercent.push(this.getPercent(data.total_installment, data.actual_installment))
    });
    this.FdResponse.forEach((data) => {
      this.FdPercent.push(this.getPercent(data.total_installment, data.actual_installment))
    });
    this.OlResponse.forEach((data) => {
      this.OlPercent.push(this.getPercent(parseInt(data.total_installment), parseInt(data.actual_installment)))
    });
    this.PlResponse.forEach((data) => {
          this.PlPercent.push(this.getPercent(parseInt(data.total_installment), parseInt(data.actual_installment)))
    });
    this.GlResponse.forEach((data) => {
          this.GlPercent.push(this.getPercent(parseInt(data.total_installment), parseInt(data.actual_installment)))
    });
    this.DlResponse.forEach((data) => {
          this.DlPercent.push(this.getPercent(parseInt(data.total_installment), parseInt(data.actual_installment)))
    });

    let interest = this.Saving[0].interest_rate;
    let blc = this.Saving[0].balance_available;
    if(blc == ''){
      blc = 0;
    }else{
      blc= parseInt(blc);
    }
    if(interest == ''){
      interest = 0;
    }else{
      interest= parseInt(interest);
    }
      this.today_interest =  Number(((blc*interest)/100*1/365).toFixed(2));
      setTimeout(function(){ 
          var max = 150.72259521484375;
          $.each($('.progress_cal'), function( index, value ){
          var percent = $(value).data('progress');
            $(value).children('.fill').attr('style', 'stroke-dashoffset: ' + ((100 - percent) / 100) * max);
            $(value).children('.value').text(percent + '%');
          });
        }, 1);
  }
  

});
}
getPercent(totalAmt, PaidAmt){
  var percentamt: number = 0;
  if(totalAmt != 0 && PaidAmt != 0){
      percentamt = (PaidAmt/totalAmt)*100;
  }
  if(percentamt == 0){
    return percentamt;
  }
  if(percentamt == 100){
    return percentamt.toFixed(0);
  }
    return percentamt.toFixed(2); 
}

//Saving Click
saving: any;
SavingClick(type:string,slug:string){
  this.saving = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.saving)
    }
  };
  this.router.navigate(['dashboard/saving'], navigationExtras);
}
//End Saving Click
//DD Click
dd: any;
DdClick(type:string,slug:string){
  this.dd = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.dd)
    }
  };
  this.router.navigate(['/dashboard/dd/ddview'], navigationExtras);
}
//End DD Click

//RD Click
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
  this.router.navigate(['/dashboard/rd/rdview'], navigationExtras);
}
// End RD CLick 
//FD Click
fd : any;
FdClick(type:string,slug:string){
  this.fd = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.fd)
    }
  };
  this.router.navigate(['/dashboard/fd/fdview'], navigationExtras);
}
// End FD CLick 
//OL Click
ol : any;
OlClick(type:string,slug:string){
  this.ol = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.ol)
    }
  };
  this.router.navigate(['/dashboard/ol'], navigationExtras);
}
// End OL CLick 
//DL Click
dl : any;
DlClick(type:string,slug:string){
  this.dl = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.dl)
    }
  };
  this.router.navigate(['/dashboard/dl'], navigationExtras);
}
// End DL CLick 
//GL Click
gl : any;
GlClick(type:string,slug:string){
  this.gl = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.gl)
    }
  };
  this.router.navigate(['/dashboard/gl'], navigationExtras);
}
// End GL CLick 
//PL Click
pl : any;
PlClick(type:string,slug:string){
  this.pl = {
    type: type,
    slug: slug
  };
  let navigationExtras: NavigationExtras = {
    queryParams: {
      special: JSON.stringify(this.pl)
    }
  };
  this.router.navigate(['/dashboard/pl'], navigationExtras);
}
// End PL CLick 


logout(){
      this.storage.remove('offline-user');
      this.navCtrl.navigateRoot('/');
}
transaction(){
  this.router.navigate(['/transaction'],);
}
  
 
}