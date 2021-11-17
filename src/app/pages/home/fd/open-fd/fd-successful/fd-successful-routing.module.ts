import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FdSuccessfulPage } from './fd-successful.page';

const routes: Routes = [
  {
    path: '',
    component: FdSuccessfulPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FdSuccessfulPageRoutingModule {}
