import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PiernasCinturaPage } from './piernas-cintura.page';

const routes: Routes = [
  {
    path: '',
    component: PiernasCinturaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PiernasCinturaPageRoutingModule {}
