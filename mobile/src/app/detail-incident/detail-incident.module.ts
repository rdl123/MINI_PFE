import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailIncidentPageRoutingModule } from './detail-incident-routing.module';

import { DetailIncidentPage } from './detail-incident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailIncidentPageRoutingModule
  ],
  declarations: [DetailIncidentPage]
})
export class DetailIncidentPageModule {}
