import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyIncidentsMapPage } from './my-incidents-map.page';

const routes: Routes = [
  {
    path: '',
    component: MyIncidentsMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyIncidentsMapPageRoutingModule {}
