import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FdviewPageRoutingModule } from './fdview-routing.module';

import { FdviewPage } from './fdview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FdviewPageRoutingModule
  ],
  declarations: [FdviewPage]
})
export class FdviewPageModule {}
