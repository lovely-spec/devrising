import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RlPage } from './rl.page';

const routes: Routes = [
  {
    path: '',
    component: RlPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RlPageRoutingModule {}
