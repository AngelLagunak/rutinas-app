import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AbdominalesPageRoutingModule } from './abdominales-routing.module';

import { AbdominalesPage } from './abdominales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AbdominalesPageRoutingModule
  ],
  declarations: [AbdominalesPage]
})
export class AbdominalesPageModule {}
