import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PiernasCinturaPageRoutingModule } from './piernas-cintura-routing.module';

import { PiernasCinturaPage } from './piernas-cintura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PiernasCinturaPageRoutingModule
  ],
  declarations: [PiernasCinturaPage]
})
export class PiernasCinturaPageModule {}
