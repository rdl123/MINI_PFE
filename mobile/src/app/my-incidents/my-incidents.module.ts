import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyIncidentsPageRoutingModule } from './my-incidents-routing.module';

import { MyIncidentsPage } from './my-incidents.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyIncidentsPageRoutingModule
  ],
  declarations: [MyIncidentsPage]
})
export class MyIncidentsPageModule {}
