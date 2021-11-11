import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FdOpenSuccessfullyPage } from './fd-open-successfully.page';

const routes: Routes = [
  {
    path: '',
    component: FdOpenSuccessfullyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FdOpenSuccessfullyPageRoutingModule {}
