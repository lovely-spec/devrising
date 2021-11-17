import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OpenFdPageRoutingModule } from './open-fd-routing.module';

import { OpenFdPage } from './open-fd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OpenFdPageRoutingModule
  ],
  declarations: [OpenFdPage]
})
export class OpenFdPageModule {}
