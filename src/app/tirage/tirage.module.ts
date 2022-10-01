import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



import { IonicModule } from '@ionic/angular';

import { TiragePageRoutingModule } from './tirage-routing.module';

import { TiragePage } from './tirage.page';
import { MenuComponent } from '../menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    TiragePageRoutingModule
  ],
  declarations: [TiragePage,MenuComponent]
})
export class TiragePageModule {}
