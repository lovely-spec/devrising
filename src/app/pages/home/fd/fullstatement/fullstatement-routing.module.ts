import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullstatementPage } from './fullstatement.page';

const routes: Routes = [
  {
    path: '',
    component: FullstatementPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FullstatementPageRoutingModule {}
