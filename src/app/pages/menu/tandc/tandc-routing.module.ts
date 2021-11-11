import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TandcPage } from './tandc.page';

const routes: Routes = [
  {
    path: '',
    component: TandcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TandcPageRoutingModule {}
