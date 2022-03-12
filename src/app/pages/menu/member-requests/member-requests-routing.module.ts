import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberRequestsPage } from './member-requests.page';

const routes: Routes = [
  {
    path: '',
    component: MemberRequestsPage
  },
  {
    path: 'editm',
    loadChildren: () => import('../../home/add-member/add-new-member/add-new-member.module').then( m => m.AddNewMemberPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRequestsPageRoutingModule {}
