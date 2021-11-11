import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DdviewPageRoutingModule } from './ddview-routing.module';

import { DdviewPage } from './ddview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DdviewPageRoutingModule
  ],
  declarations: [DdviewPage]
})
export class DdviewPageModule {}
