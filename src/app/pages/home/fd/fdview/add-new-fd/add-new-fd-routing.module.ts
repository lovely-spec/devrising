import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewFdPage } from './add-new-fd.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewFdPage
  },
  {
    path: 'fd-open-successfully',
    loadChildren: () => import('../fd-open-successfully/fd-open-successfully.module').then( m => m.FdOpenSuccessfullyPageModule)
  },
  {
    path: 'add-minor',
    loadChildren: () => import('../../../add-minor/add-minor.module').then( m => m.AddMinorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewFdPageRoutingModule {}
