import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReinitialiserPasswordPage } from './reinitialiser-password.page';

const routes: Routes = [
  {
    path: '',
    component: ReinitialiserPasswordPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReinitialiserPasswordPageRoutingModule {}
