import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage
  },
  {
    path: 'member-requests',
    loadChildren: () => import('./member-requests/member-requests.module').then( m => m.MemberRequestsPageModule)
  },
  {
    path: 'other-requests',
    loadChildren: () => import('./other-requests/other-requests.module').then( m => m.OtherRequestsPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
