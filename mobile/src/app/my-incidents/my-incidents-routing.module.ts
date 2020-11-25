import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyIncidentsPage } from './my-incidents.page';

const routes: Routes = [
  {
    path: '',
    component: MyIncidentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyIncidentsPageRoutingModule {}
