import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SavingCreditPage } from './saving-credit.page';

const routes: Routes = [
  {
    path: '',
    component: SavingCreditPage
  },
  {
    path: 'select-app',
    loadChildren: () => import('./select-app/select-app.module').then( m => m.SelectAppPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SavingCreditPageRoutingModule {}
