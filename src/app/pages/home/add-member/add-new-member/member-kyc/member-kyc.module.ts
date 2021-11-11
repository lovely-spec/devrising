import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberKycPageRoutingModule } from './member-kyc-routing.module';

import { MemberKycPage } from './member-kyc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberKycPageRoutingModule
  ],
  declarations: [MemberKycPage]
})
export class MemberKycPageModule {}
