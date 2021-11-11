import { Component, OnInit } from '@angular/core';
import { ApihelperProvider } from 'src/providers/apihelper/apihelper';
import { Router, NavigationExtras } from '@angular/router';
import { NotificationPage } from '../../home/notification/notification.page';
import { PopoverController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.page.html',
  styleUrls: ['./loan.page.scss'],
})
export class LoanPage implements OnInit {
  public UserResponse: any=[];
   OL: any = []; 
   DL: any = []; 
   GL: any = []; 
   FL: any = []; 
   PL: any = []; 
  constructor(
    public provider : ApihelperProvider,
    private router: Router,
    public popoverController: PopoverController,
    public navCtrl: NavController,
  ) { 
    
  }

  ngOnInit() {
  }
 gohome(){
  this.navCtrl.navigateRoot('/dashboard/home'); 
}
 ionViewDidEnter() {
    // User Details From API
    console.log(this.UserResponse.length);
      this.LoanFetch();
  }
  async presentPopover(ev: any) {
  
    const popover = await this.popoverController.create({
      component: NotificationPage,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
  LoanFetch(){
    this.provider.UserPanel().subscribe(data=>{
      this.UserResponse = this.provider.User_details(data);
      if(this.UserResponse){
        this.OL = this.UserResponse.OL;
        console.log('sdf',this.UserResponse);
        this.DL = this.UserResponse.DL;
        this.GL = this.UserResponse.GL;
        this.FL = this.UserResponse.FL;
        this.PL = this.UserResponse.PL;
      }
    })
  }
  //OL Click
  ol : any;
  olclick(type:string,slug:string){
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
  dlclick(type:string,slug:string){
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
  // End dl CLick

  //GL Click
  gl : any;
  glclick(type:string,slug:string){
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
  // End gl CLick

  //gL Click

  rl : any;
  rlclick(type:string,slug:string){
    this.rl = {
      type: type,
      slug: slug
    };
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.rl)
      }
    };
    this.router.navigate(['/dashboard/rl'], navigationExtras);
  }
  // End rl CLick

  //PL Click
  pl : any;
  plclick(type:string,slug:string){
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

   //PL Click
  fl : any;
   flclick(type:string,slug:string){
     this.fl = {
       type: type,
       slug: slug
     };
     let navigationExtras: NavigationExtras = {
       queryParams: {
         special: JSON.stringify(this.fl)
       }
     };
     this.router.navigate(['/dashboard/fl'], navigationExtras);
   }
   // End PL CLick
}
