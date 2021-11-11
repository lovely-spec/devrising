import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RdOpenSuccessfullyPage } from './rd-open-successfully.page';

const routes: Routes = [
  {
    path: '',
    component: RdOpenSuccessfullyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RdOpenSuccessfullyPageRoutingModule {}
