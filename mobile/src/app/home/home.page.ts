import { Component } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public contact = {
    name: 'Incident',
    email: 'groupeIncident@gmail.com',
    tel: '0685942325',
    logo: 'assets/image/casa_image.jpg',
    location: 'assets/image/locationEHTP.png'

  };
  constructor(private navController : NavController,private router:Router) {}
  processDeclarer() {
    this.navController.navigateRoot(['/menu/add-incident']);
    
  }
  processListe() {
    this.navController.navigateRoot(['/menu/filter/my-incidents']);
   
  }
  processListeOnMap(){
    this.navController.navigateRoot(['/menu/filter/my-incidents-map']);
   
  }
}
