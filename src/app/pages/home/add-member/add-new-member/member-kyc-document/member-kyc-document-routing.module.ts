import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MemberKycDocumentPage } from './member-kyc-document.page';

const routes: Routes = [
  {
    path: '',
    component: MemberKycDocumentPage
  },
  {
    path: 'preview',
    loadChildren: () => import('../preview-details/preview-details.module').then( m => m.PreviewDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MemberKycDocumentPageRoutingModule {}
