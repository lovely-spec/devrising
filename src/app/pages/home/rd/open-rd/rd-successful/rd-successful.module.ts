import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdSuccessfulPageRoutingModule } from './rd-successful-routing.module';

import { RdSuccessfulPage } from './rd-successful.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdSuccessfulPageRoutingModule
  ],
  declarations: [RdSuccessfulPage]
})
export class RdSuccessfulPageModule {}
