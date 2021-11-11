import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewDetailsPageRoutingModule } from './preview-details-routing.module';

import { PreviewDetailsPage } from './preview-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewDetailsPageRoutingModule
  ],
  declarations: [PreviewDetailsPage]
})
export class PreviewDetailsPageModule {}
