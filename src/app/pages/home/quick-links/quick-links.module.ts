import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuickLinksPageRoutingModule } from './quick-links-routing.module';

import { QuickLinksPage } from './quick-links.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuickLinksPageRoutingModule
  ],
  declarations: [QuickLinksPage]
})
export class QuickLinksPageModule {}
