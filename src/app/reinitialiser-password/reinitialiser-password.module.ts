import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReinitialiserPasswordPageRoutingModule } from './reinitialiser-password-routing.module';

import { ReinitialiserPasswordPage } from './reinitialiser-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReinitialiserPasswordPageRoutingModule
  ],
  declarations: [ReinitialiserPasswordPage]
})
export class ReinitialiserPasswordPageModule {}
