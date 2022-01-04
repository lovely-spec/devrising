import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessfulPagePageRoutingModule } from './successful-page-routing.module';

import { SuccessfulPagePage } from './successful-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessfulPagePageRoutingModule
  ],
  declarations: [SuccessfulPagePage]
})
export class SuccessfulPagePageModule {}
