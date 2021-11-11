import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OlPageRoutingModule } from './ol-routing.module';

import { OlPage } from './ol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OlPageRoutingModule
  ],
  declarations: [OlPage]
})
export class OlPageModule {}
