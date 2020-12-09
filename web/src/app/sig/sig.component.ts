import { Component, OnInit } from '@angular/core';
declare let L;
@Component({
  selector: 'app-sig',
  templateUrl: './sig.component.html',
  styleUrls: ['./sig.component.scss']
})
export class SIGComponent implements OnInit {
Incidents=[
  {
    "id":1,"date":"2018-08-22","description":"Incident1",
  "idProv":6,"idSecteur":4,"ime":"333",
  "latitude":33.595062,"longitude":-7.618777,"statut":"validé"
},
  {
    "id":2,"date":"2018-08-23","description":"Incident2",
  "idProv":7,"idSecteur":3,"ime":"338",
  "latitude":33.40164,"longitude":-7.84973,"statut":"validé"
},
{
  "id":3,"date":"2018-08-24","description":"InciHdent3",
"idProv":9,"idSecteur":8,"ime":"330",
"latitude":33.46811,"longitude":-4.4165,"statut":"validé"
}

];

constructor() {
}


  ngOnInit() {
    var lat=31.1728205;
    var lng= -7.3362482;
    var zoom= 6;
   // set up the map and remove the default zoomControl
    var mapboxAccessToken = "pk.eyJ1Ijoic3VwZXJwaWthciIsImEiOiI0MGE3NGQ2OWNkMzkyMzFlMzE4OWU5Yjk0ZmYzMGMwOCJ9.3bGFHjoSXB8yVA3KeQoOIw";
           var map = L.map('map', {zoomControl: false},{measureControl: true}).setView([lat, lng], zoom);
           var streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
   
  
   
    // custom zoom bar control that includes a Zoom Home function
      L.Control.zoomHome = L.Control.extend({
        options: {
          position: 'topleft',
          zoomInText: '+',
          zoomInTitle: 'Zoom in',
          zoomOutText: '-',
          zoomOutTitle: 'Zoom out',
          zoomHomeText: '<i class="fa fa-home" style="line-height:1.65;"></i>',
          zoomHomeTitle: 'Zoom home'
        },
   
        onAdd: function (map) {
          var controlName = 'gin-control-zoom',
            container = L.DomUtil.create('div', controlName + ' leaflet-bar'),
            options = this.options;
   
          this._zoomInButton = this._createButton(options.zoomInText, options.zoomInTitle,
          controlName + '-in', container, this._zoomIn);
          this._zoomHomeButton = this._createButton(options.zoomHomeText, options.zoomHomeTitle,
          controlName + '-home', container, this._zoomHome);
          this._zoomOutButton = this._createButton(options.zoomOutText, options.zoomOutTitle,
          controlName + '-out', container, this._zoomOut);
   
          this._updateDisabled();
          map.on('zoomend zoomlevelschange', this._updateDisabled, this);
   
          return container;
        },
   
        onRemove: function (map) {
          map.off('zoomend zoomlevelschange', this._updateDisabled, this);
        },
   
        _zoomIn: function (e) {
          this._map.zoomIn(e.shiftKey ? 3 : 1);
        },
   
        _zoomOut: function (e) {
          this._map.zoomOut(e.shiftKey ? 3 : 1);
        },
   
        _zoomHome: function (e) {
          map.setView([lat, lng], zoom);
        },
   
        _createButton: function (html, title, className, container, fn) {
          var link = L.DomUtil.create('a', className, container);
          link.innerHTML = html;
          link.href = '#';
          link.title = title;
   
          L.DomEvent.on(link, 'mousedown dblclick', L.DomEvent.stopPropagation)
            .on(link, 'click', L.DomEvent.stop)
            .on(link, 'click', fn, this)
            .on(link, 'click', this._refocusOnMap, this);
   
          return link;
        },
   
        _updateDisabled: function () {
          var map = this._map,
            className = 'leaflet-disabled';
   
          L.DomUtil.removeClass(this._zoomInButton, className);
          L.DomUtil.removeClass(this._zoomOutButton, className);
   
          if (map._zoom === map.getMinZoom()) {
            L.DomUtil.addClass(this._zoomOutButton, className);
          }
          if (map._zoom === map.getMaxZoom()) {
            L.DomUtil.addClass(this._zoomInButton, className);
          }
        }
      });
    // add the new control to the map
      var zoomHome = new L.Control.zoomHome();
      zoomHome.addTo(map);
      
      this.mesure(map);
      this.print(map);
      this.position(map);
      this.markers(map);
      

      
   
  }
  
    
  
  mesure(map){
    //mesurer
    var plugin = L.control.measure({
      //  control position
      position: 'topleft',
      //  weather to use keyboard control for this plugin
      keyboard: true,
      //  shortcut to activate measure
      activeKeyCode: 'M'.charCodeAt(0),
      //  shortcut to cancel measure, defaults to 'Esc'
      cancelKeyCode: 27,
      //  line color
      lineColor: 'red',
      //  line weight
      lineWeight: 2,
      //  line dash
      lineDashArray: '6, 6',
      //  line opacity
      lineOpacity: 1,
      //  distance formatter
      // formatDistance: function (val) {
      //   return Math.round(1000 * val / 1609.344) / 1000 + 'mile';
      // }
  }).addTo(map);
  }
  
print(map){
//print
var printer = L.easyPrint({

  sizeModes: ['Current', 'A4Landscape', 'A4Portrait'],
  filename: 'myMap',
  exportOnly: true,
  hideControlContainer: true
}).addTo(map);
}
  position(map) {
    L.control.mousePosition().addTo(map);
    L.control.scale().addTo(map);
  }
  markers(map) {
    var marker;
    for (var i = 0; i < this.Incidents.length; i++) {
      marker = L.marker([this.Incidents[i].latitude, this.Incidents[i].longitude]).addTo(map);
      marker.bindPopup('Desciption:'+this.Incidents[i].description+'</br>Statut:'+this.Incidents[i].statut);
    }}
  
  

}
