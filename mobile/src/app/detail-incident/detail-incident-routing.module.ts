import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailIncidentPage } from './detail-incident.page';

const routes: Routes = [
  {
    path: '',
    component: DetailIncidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailIncidentPageRoutingModule {}
