import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoanPageRoutingModule } from './loan-routing.module';

import { LoanPage } from './loan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoanPageRoutingModule
  ],
  declarations: [LoanPage]
})
export class LoanPageModule {

//   timeCalc(d1, d2){
	
//     let date1 = new Date(d1).getTime();
//     let date2 = new Date(d2).getTime();

//     let msec = date2 - date1;
//     let mins = Math.floor(msec / 60000);
//     let hrs = Math.floor(mins / 60);
//     let days = Math.floor(hrs / 24);
    
//     mins = mins % 60;

//     let tValue1= `In hours: ${hrs} hours,  ${mins}  minutes`
//     let tValue2= `In days: ${days}  days, ${hrs} hours, ${mins} minutes`
 
//    return tValue1
//   // return tValue2

// }
}
