import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyIncidentsMapPageRoutingModule } from './my-incidents-map-routing.module';

import { MyIncidentsMapPage } from './my-incidents-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyIncidentsMapPageRoutingModule
  ],
  declarations: [MyIncidentsMapPage]
})
export class MyIncidentsMapPageModule {}
