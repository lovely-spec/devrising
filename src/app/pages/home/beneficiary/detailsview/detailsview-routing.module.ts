import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailsviewPage } from './detailsview.page';

const routes: Routes = [
  {
    path: '',
    component: DetailsviewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailsviewPageRoutingModule {}
