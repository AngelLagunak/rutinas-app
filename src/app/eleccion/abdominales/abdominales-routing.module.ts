import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AbdominalesPage } from './abdominales.page';

const routes: Routes = [
  {
    path: '',
    component: AbdominalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AbdominalesPageRoutingModule {}
