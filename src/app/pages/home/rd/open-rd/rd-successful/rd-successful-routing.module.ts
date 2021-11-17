import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdSuccessfulPage } from './rd-successful.page';

const routes: Routes = [
  {
    path: '',
    component: RdSuccessfulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdSuccessfulPageRoutingModule {}
