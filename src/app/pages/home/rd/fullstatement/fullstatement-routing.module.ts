import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullstatementPage } from './fullstatement.page';

const routes: Routes = [
  {
    path: '',
    component: FullstatementPage
  },
  {
    path: 'add_payment',
    loadChildren: () => import('../rdview/addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullstatementPageRoutingModule {}
