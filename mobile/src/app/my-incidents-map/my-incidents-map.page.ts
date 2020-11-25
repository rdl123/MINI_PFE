
import { Component, OnInit } from '@angular/core';
import {  marker } from 'leaflet';
import {IncidentService} from '../services/Incident.service';
import { Map, latLng, tileLayer, Layer } from 'leaflet';

declare  let L;
declare var require: any;
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});
@Component({
  selector: 'app-my-incidents-map',
  templateUrl: './my-incidents-map.page.html',
  styleUrls: ['./my-incidents-map.page.scss'],
})
export class MyIncidentsMapPage implements OnInit {
    map: Map;
    ListIncident: any;
   data: any;
    constructor(
        private incidentService: IncidentService,
    ) {

    }
    ionViewDidEnter() { this.leafletMap(); }
    // todo: update list incident in this composante using this function to update its value in the incident service
    updateListIncidents(nextValue) {
        this.ListIncident = nextValue;
        this.incidentService.listIncidents.next(nextValue);
    }

    ngOnInit() {

//        console.log(this.incidentService.listIncidents)
        this.incidentService.listIncidents.subscribe(
            (value: any) => {
                this.ListIncident = value;
                console.log('map console :', this.ListIncident);
            }
        );
        this.updateListIncidents(this.incidentService.listIncidents.value);
        console.log(this.ListIncident);
    }

    showCurrentValue() {
        console.log(this.ListIncident[46].longitude);
        console.log(this.ListIncident[46].photo);

    }

   leafletMap() {
        // In setView add latLng and zoom
       this.map = new Map('mapId').setView([ 31.1728205, -7.3362482], 5);
       tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
           attribution: 'edupala.com © ionic LeafLet',
       }).addTo(this.map);
       for (let i = 0; i < this.ListIncident.length; i++) {
           console.log(this.ListIncident[i].longitude);
           // .circle([this.ListPoi[i].latitude, this.ListPoi[i].longitude], {radius: 500}).addTo(this.map);
           const marker = L.marker([this.ListIncident[i].latitude, this.ListIncident[i].longitude]).addTo(this.map);
          // marker.bindPopup('longitude:' + this.ListIncident[i].longitude + '</br> latitude:' + this.ListIncident[i].latitude);
           marker.bindPopup('<b>Secteur:</b>' + this.ListIncident[i].secteur.secteur +
               '</br> <b>Type: </b>' + this.ListIncident[i].type.type +
               '</br> <b>Longitude:</b>' + this.ListIncident[i].longitude + '</br> <b>Latitude:</b>' + this.ListIncident[i].latitude +
               '</br> <img src="' + this.ListIncident[i].photo  + '" ' + 'style=" width: 50px;' + ' height: 50px;"  />'
           );
       }
       }

    /** Remove map when we have multiple map object */
    ionViewWillLeave() {
        this.map.remove();
    }

}
