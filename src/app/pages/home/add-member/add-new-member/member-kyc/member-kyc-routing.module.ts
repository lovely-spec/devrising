import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberKycPage } from './member-kyc.page';

const routes: Routes = [
  {
    path: '',
    component: MemberKycPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberKycPageRoutingModule {}
