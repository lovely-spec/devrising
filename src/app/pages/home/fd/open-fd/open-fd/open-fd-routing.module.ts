import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenFdPage } from './open-fd.page';

const routes: Routes = [
  {
    path: '',
    component: OpenFdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OpenFdPageRoutingModule {}
