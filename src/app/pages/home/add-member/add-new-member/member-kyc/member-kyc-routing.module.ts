import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberKycPage } from './member-kyc.page';

const routes: Routes = [
  {
    path: '',
    component: MemberKycPage
  },
  {
    path: 'preview',
    loadChildren: () => import('../preview-details/preview-details.module').then( m => m.PreviewDetailsPageModule)
  },
  {
    path: 'kyc-document',
    loadChildren: () => import('../member-kyc-document/member-kyc-document.module').then( m => m.MemberKycDocumentPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberKycPageRoutingModule {}
