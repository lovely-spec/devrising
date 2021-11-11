import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WbtransferPage } from './wbtransfer.page';

const routes: Routes = [
  {
    path: '',
    component: WbtransferPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WbtransferPageRoutingModule {}
