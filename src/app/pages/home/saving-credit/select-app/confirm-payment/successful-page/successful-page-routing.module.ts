import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessfulPagePage } from './successful-page.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessfulPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessfulPagePageRoutingModule {}
