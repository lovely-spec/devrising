import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TandcPageRoutingModule } from './tandc-routing.module';

import { TandcPage } from './tandc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TandcPageRoutingModule
  ],
  declarations: [TandcPage]
})
export class TandcPageModule {}
