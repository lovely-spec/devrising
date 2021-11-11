import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WbbeneficiaryPageRoutingModule } from './wbbeneficiary-routing.module';

import { WbbeneficiaryPage } from './wbbeneficiary.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WbbeneficiaryPageRoutingModule
  ],
  declarations: [WbbeneficiaryPage]
})
export class WbbeneficiaryPageModule {}
