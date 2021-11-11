import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepaymentSchedulePage } from './repayment-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: RepaymentSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepaymentSchedulePageRoutingModule {}
