import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberRequestsPageRoutingModule } from './member-requests-routing.module';

import { MemberRequestsPage } from './member-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberRequestsPageRoutingModule
  ],
  declarations: [MemberRequestsPage]
})
export class MemberRequestsPageModule {}
