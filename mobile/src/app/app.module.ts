import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {SecteurService} from './services/secteur.service';
import {TypeService} from './services/type.service';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {IncidentService} from './services/Incident.service';
import {ProvinceService} from './services/province.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {ModalpopupPageModule} from './modalpopup/modalpopup.module';
import {Device} from '@ionic-native/device/ngx';

//import { HereMapComponent } from "../app/here-map/here-map.component";
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, ModalpopupPageModule],
  providers: [
    SecteurService, TypeService , Geolocation, IncidentService, ProvinceService,
    StatusBar, Camera, Device,
      SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
