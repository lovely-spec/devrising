import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TransactionPage } from './transaction.page';

const routes: Routes = [
  {
    path: '',
    component: TransactionPage
  },
  {
    path: 'wbbeneficiary',
    loadChildren: () => import('./wbbeneficiary/wbbeneficiary.module').then( m => m.WbbeneficiaryPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransactionPageRoutingModule {}
