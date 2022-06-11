import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EleccionPage } from './eleccion.page';

const routes: Routes = [
  {
    path: '',
    component: EleccionPage
  },
  {
    path: 'pecho',
    loadChildren: () => import('./pecho/pecho.module').then( m => m.PechoPageModule)
  },
  {
    path: 'dorsales-espalda',
    loadChildren: () => import('./dorsales-espalda/dorsales-espalda.module').then( m => m.DorsalesEspaldaPageModule)
  },
  {
    path: 'piernas-cintura',
    loadChildren: () => import('./piernas-cintura/piernas-cintura.module').then( m => m.PiernasCinturaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EleccionPageRoutingModule {}
