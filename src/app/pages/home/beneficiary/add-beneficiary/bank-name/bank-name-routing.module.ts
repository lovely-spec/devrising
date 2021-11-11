import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankNamePage } from './bank-name.page';

const routes: Routes = [
  {
    path: '',
    component: BankNamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BankNamePageRoutingModule {}
