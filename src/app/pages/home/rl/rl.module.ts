import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RlPageRoutingModule } from './rl-routing.module';

import { RlPage } from './rl.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RlPageRoutingModule
  ],
  declarations: [RlPage]
})
export class RlPageModule {}
