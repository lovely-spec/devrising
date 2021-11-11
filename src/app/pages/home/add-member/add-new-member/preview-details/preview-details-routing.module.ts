import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewDetailsPage } from './preview-details.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewDetailsPageRoutingModule {}
