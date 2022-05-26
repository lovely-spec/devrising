import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdviewPage } from './rdview.page';

const routes: Routes = [
  {
    path: '',
    component: RdviewPage
  },
  {
    path: 'fullstatement',
    loadChildren: () => import('../fullstatement/fullstatement.module').then( m => m.FullstatementPageModule)
  },
  {
    path: 'add-new-rd',
    loadChildren: () => import('./add-new-rd/add-new-rd.module').then( m => m.AddNewRdPageModule)
  },
  {
    path: 'rd-open-successfully',
    loadChildren: () => import('./rd-open-successfully/rd-open-successfully.module').then( m => m.RdOpenSuccessfullyPageModule)
  },
  {
    path: 'add_payment',
    loadChildren: () => import('./addpayment/addpayment.module').then( m => m.AddpaymentPageModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdviewPageRoutingModule {}
