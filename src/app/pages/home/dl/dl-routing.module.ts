import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DlPage } from './dl.page';

const routes: Routes = [
  {
    path: '',
    component: DlPage
  },
  {
    path: 'addpayment',
    loadChildren: () => import('./addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DlPageRoutingModule {}
