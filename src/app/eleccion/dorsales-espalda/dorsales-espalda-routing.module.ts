import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DorsalesEspaldaPage } from './dorsales-espalda.page';

const routes: Routes = [
  {
    path: '',
    component: DorsalesEspaldaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DorsalesEspaldaPageRoutingModule {}
