import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddIncidentPage } from './add-incident.page';

const routes: Routes = [
  {
    path: '',
    component: AddIncidentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddIncidentPageRoutingModule {}
