import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WbtransferPageRoutingModule } from './wbtransfer-routing.module';

import { WbtransferPage } from './wbtransfer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WbtransferPageRoutingModule
  ],
  declarations: [WbtransferPage]
})
export class WbtransferPageModule {}
