import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FdviewPage } from './fdview.page';

const routes: Routes = [
  {
    path: '',
    component: FdviewPage
  },
  {
    path: 'fullstatement',
    loadChildren: () => import('../fullstatement/fullstatement.module').then( m => m.FullstatementPageModule)
  },
  {
    path: 'add-new-fd',
    loadChildren: () => import('./add-new-fd/add-new-fd.module').then( m => m.AddNewFdPageModule)
  },
  {
    path: 'fd-open-successfully',
    loadChildren: () => import('./fd-open-successfully/fd-open-successfully.module').then( m => m.FdOpenSuccessfullyPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FdviewPageRoutingModule {}
