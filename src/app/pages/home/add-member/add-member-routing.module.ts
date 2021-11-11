import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddMemberPage } from './add-member.page';

const routes: Routes = [
  {
    path: '',
    component: AddMemberPage
  },
  {
    path: 'add-new-member',
    loadChildren: () => import('./add-new-member/add-new-member.module').then( m => m.AddNewMemberPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddMemberPageRoutingModule {}
