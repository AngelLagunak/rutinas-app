import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DorsalesEspaldaPageRoutingModule } from './dorsales-espalda-routing.module';

import { DorsalesEspaldaPage } from './dorsales-espalda.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DorsalesEspaldaPageRoutingModule
  ],
  declarations: [DorsalesEspaldaPage]
})
export class DorsalesEspaldaPageModule {}
