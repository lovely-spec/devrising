import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberKycDocumentPageRoutingModule } from './member-kyc-document-routing.module';

import { MemberKycDocumentPage } from './member-kyc-document.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberKycDocumentPageRoutingModule
  ],
  declarations: [MemberKycDocumentPage]
})
export class MemberKycDocumentPageModule {}
