import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'menu/home', pathMatch: 'full' },
  {
    path: 'menu',


    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'detail-incident',
    loadChildren: () => import('./detail-incident/detail-incident.module').then( m => m.DetailIncidentPageModule)
  },
  {
    path: 'modalpopup',
    loadChildren: () => import('./modalpopup/modalpopup.module').then( m => m.ModalpopupPageModule)
  },
  /*{
    path: 'my-incidents',
    loadChildren: () => import('./my-incidents/my-incidents.module').then( m => m.MyIncidentsPageModule)
  },
  {
    path: 'my-incidents-map',
    loadChildren: () => import('./my-incidents-map/my-incidents-map.module').then( m => m.MyIncidentsMapPageModule)
  },*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
