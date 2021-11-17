import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenRdPage } from './open-rd.page';

const routes: Routes = [
  {
    path: '',
    component: OpenRdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenRdPageRoutingModule {}
