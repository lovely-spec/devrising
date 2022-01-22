import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OtherRequestsPageRoutingModule } from './other-requests-routing.module';

import { OtherRequestsPage } from './other-requests.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OtherRequestsPageRoutingModule
  ],
  declarations: [OtherRequestsPage]
})
export class OtherRequestsPageModule {}
