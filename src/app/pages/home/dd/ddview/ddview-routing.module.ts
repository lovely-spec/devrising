import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DdviewPage } from './ddview.page';

const routes: Routes = [
  {
    path: '',
    component: DdviewPage
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
export class DdviewPageRoutingModule {}
