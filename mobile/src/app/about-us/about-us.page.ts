import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {
  public contact = {
    name: 'Incident',
    email: 'groupeIncident@gmail.com',
    tel: '0685942325',
    logo: 'assets/image/Photo.png',
    location: 'assets/image/locationEHTP.png',



  };
  constructor() { }

  ngOnInit() {
  }

}
