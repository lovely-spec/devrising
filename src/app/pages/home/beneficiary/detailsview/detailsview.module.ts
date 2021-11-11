import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailsviewPageRoutingModule } from './detailsview-routing.module';

import { DetailsviewPage } from './detailsview.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailsviewPageRoutingModule
  ],
  declarations: [DetailsviewPage]
})
export class DetailsviewPageModule {}
