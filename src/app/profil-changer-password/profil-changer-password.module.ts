import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilChangerPasswordPageRoutingModule } from './profil-changer-password-routing.module';

import { ProfilChangerPasswordPage } from './profil-changer-password.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilChangerPasswordPageRoutingModule
  ],
  declarations: [ProfilChangerPasswordPage]
})
export class ProfilChangerPasswordPageModule {}
