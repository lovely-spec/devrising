import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RdviewPageRoutingModule } from './rdview-routing.module';

import { RdviewPage } from './rdview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RdviewPageRoutingModule
  ],
  declarations: [RdviewPage]
})
export class RdviewPageModule {}
