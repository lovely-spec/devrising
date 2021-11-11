import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlPageRoutingModule } from './pl-routing.module';

import { PlPage } from './pl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlPageRoutingModule
  ],
  declarations: [PlPage]
})
export class PlPageModule {}
