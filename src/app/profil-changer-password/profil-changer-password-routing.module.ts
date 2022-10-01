import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilChangerPasswordPage } from './profil-changer-password.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilChangerPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilChangerPasswordPageRoutingModule {}
