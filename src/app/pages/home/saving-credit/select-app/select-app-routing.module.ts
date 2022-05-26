import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectAppPage } from './select-app.page';

const routes: Routes = [
  {
    path: '',
    component: SelectAppPage
  },
  
  {
    path: 'confirm-payment',
    loadChildren: () => import('./confirm-payment/confirm-payment.module').then( m => m.ConfirmPaymentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectAppPageRoutingModule {}
