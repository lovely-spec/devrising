import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchemesPage } from './schemes.page';

const routes: Routes = [
  {
    path: '',
    component: SchemesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchemesPageRoutingModule {}
