import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMinorPage } from './add-minor.page';

const routes: Routes = [
  {
    path: '',
    component: AddMinorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMinorPageRoutingModule {}
