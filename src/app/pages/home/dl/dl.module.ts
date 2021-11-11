import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DlPageRoutingModule } from './dl-routing.module';

import { DlPage } from './dl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DlPageRoutingModule
  ],
  declarations: [DlPage]
})
export class DlPageModule {}
