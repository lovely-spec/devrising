import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberRequestsPage } from './member-requests.page';

const routes: Routes = [
  {
    path: '',
    component: MemberRequestsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberRequestsPageRoutingModule {}
