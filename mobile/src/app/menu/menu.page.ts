import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  public menus = [
    {  title : 'Acceuil', url: '/menu/home', icon: 'clipboard'},
    {  title : 'Déclarer un incident', url: '/menu/add-incident', icon: 'add-circle'},
    
    {  title : 'Liste des incidents', url: '/menu/filter/my-incidents', icon: 'albums'},
    {  title : 'Incidents sur carte', url: '/menu/filter/my-incidents-map', icon: 'map'},

  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  OnMenuItem(m) {
    this.router.navigateByUrl(m.url);
  }

}
