import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OlPage } from './ol.page';

const routes: Routes = [
  {
    path: '',
    component: OlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OlPageRoutingModule {}
