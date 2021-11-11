import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBeneficiaryPage } from './add-beneficiary.page';

const routes: Routes = [
  {
    path: '',
    component: AddBeneficiaryPage
  },
  {
    path: 'bank-name',
    loadChildren: () => import('./bank-name/bank-name.module').then( m => m.BankNamePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddBeneficiaryPageRoutingModule {}
