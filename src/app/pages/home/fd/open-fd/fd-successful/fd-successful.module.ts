import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FdSuccessfulPageRoutingModule } from './fd-successful-routing.module';

import { FdSuccessfulPage } from './fd-successful.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FdSuccessfulPageRoutingModule
  ],
  declarations: [FdSuccessfulPage]
})
export class FdSuccessfulPageModule {}
