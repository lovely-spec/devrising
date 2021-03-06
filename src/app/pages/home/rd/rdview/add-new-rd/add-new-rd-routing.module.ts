import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewRdPage } from './add-new-rd.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewRdPage
  },
  {
    path: 'add-minor',
    loadChildren: () => import('../../../add-minor/add-minor.module').then( m => m.AddMinorPageModule)
  },
  {
    path: 'rd-open-successfully',
    loadChildren: () => import('../rd-open-successfully/rd-open-successfully.module').then( m => m.RdOpenSuccessfullyPageModule)
  },
  {
    path: 'schemes',
    loadChildren: () => import('../../../schemes/schemes-routing.module').then( m => m.SchemesPageRoutingModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewRdPageRoutingModule {}
