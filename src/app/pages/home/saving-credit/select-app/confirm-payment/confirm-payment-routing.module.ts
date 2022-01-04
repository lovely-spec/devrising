import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmPaymentPage } from './confirm-payment.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmPaymentPage
  },
  {
    path: 'successful-page',
    loadChildren: () => import('./successful-page/successful-page.module').then( m => m.SuccessfulPagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmPaymentPageRoutingModule {}
