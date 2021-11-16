import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddNewMemberPage } from './add-new-member.page';

const routes: Routes = [
  {
    path: '',
    component: AddNewMemberPage
  },
  {
    path: 'member-kyc',
    loadChildren: () => import('./member-kyc/member-kyc.module').then( m => m.MemberKycPageModule)
  },
  {
    path: 'preview-details',
    loadChildren: () => import('./preview-details/preview-details.module').then( m => m.PreviewDetailsPageModule)
  },
  {
    path: 'address-details',
    loadChildren: () => import('./address-details/address-details.module').then( m => m.AddressDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddNewMemberPageRoutingModule {}
