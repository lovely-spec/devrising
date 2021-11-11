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
    loadChildren: () => import('./add-minor/add-minor.module').then( m => m.AddMinorPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewRdPageRoutingModule {}
