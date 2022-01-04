import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchemesPageRoutingModule } from './schemes-routing.module';

import { SchemesPage } from './schemes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchemesPageRoutingModule
  ],
  declarations: [SchemesPage]
})
export class SchemesPageModule {}
