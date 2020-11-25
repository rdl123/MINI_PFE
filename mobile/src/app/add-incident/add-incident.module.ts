import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddIncidentPageRoutingModule } from './add-incident-routing.module';

import { AddIncidentPage } from './add-incident.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddIncidentPageRoutingModule
  ],
  declarations: [AddIncidentPage]
})
export class AddIncidentPageModule {}
