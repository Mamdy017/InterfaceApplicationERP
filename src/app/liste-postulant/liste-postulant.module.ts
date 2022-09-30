import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListePostulantPageRoutingModule } from './liste-postulant-routing.module';

import { ListePostulantPage } from './liste-postulant.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListePostulantPageRoutingModule
  ],
  declarations: [ListePostulantPage,MenuComponent]
})
export class ListePostulantPageModule {}
