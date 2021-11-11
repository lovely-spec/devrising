import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepaymentSchedulePageRoutingModule } from './repayment-schedule-routing.module';

import { RepaymentSchedulePage } from './repayment-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepaymentSchedulePageRoutingModule
  ],
  declarations: [RepaymentSchedulePage]
})
export class RepaymentSchedulePageModule {}
