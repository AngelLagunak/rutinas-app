import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'eleccion',
    loadChildren: () => import('./eleccion/eleccion.module').then( m => m.EleccionPageModule)
  },
  {
    path: 'abdominales',
    loadChildren: () => import('./eleccion/abdominales/abdominales.module').then(m => m.AbdominalesPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
