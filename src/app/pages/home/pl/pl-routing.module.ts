import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlPage } from './pl.page';

const routes: Routes = [
  {
    path: '',
    component: PlPage
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
export class PlPageRoutingModule {}
