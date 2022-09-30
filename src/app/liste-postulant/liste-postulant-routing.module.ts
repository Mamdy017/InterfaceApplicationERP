import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListePostulantPage } from './liste-postulant.page';

const routes: Routes = [
  {
    path: '',
    component: ListePostulantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListePostulantPageRoutingModule {}
