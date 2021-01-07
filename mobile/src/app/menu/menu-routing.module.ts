import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      { path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},
      {
        path: 'filter',
        loadChildren: () => import('../filter/filter.module').then( m => m.FilterPageModule)
      },
      {
        path: 'add-incident',
        loadChildren: () => import('../add-incident/add-incident.module').then( m => m.AddIncidentPageModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('../about-us/about-us.module').then( m => m.AboutUsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
