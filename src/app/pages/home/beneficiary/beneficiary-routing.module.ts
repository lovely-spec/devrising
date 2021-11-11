import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BeneficiaryPage } from './beneficiary.page';

const routes: Routes = [
  {
    path: '',
    component: BeneficiaryPage
  },
  {
    path: 'add-beneficiary',
    loadChildren: () => import('./add-beneficiary/add-beneficiary.module').then( m => m.AddBeneficiaryPageModule)
  },
  {
    path: 'transfer',
    loadChildren: () => import('./transfer/transfer.module').then( m => m.TransferPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BeneficiaryPageRoutingModule {}
