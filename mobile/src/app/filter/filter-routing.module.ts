import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FilterPage } from './filter.page';

const routes: Routes = [
  {
    path: '',
    component: FilterPage,
    children: [
        {
      path: 'my-incidents',
      loadChildren: () => import('../my-incidents/my-incidents.module').then( m => m.MyIncidentsPageModule)
    },
      {
        path: 'my-incidents-map',
        loadChildren: () => import('../my-incidents-map/my-incidents-map.module').then( m => m.MyIncidentsMapPageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: '../filter/my-incidents',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FilterPageRoutingModule {}
