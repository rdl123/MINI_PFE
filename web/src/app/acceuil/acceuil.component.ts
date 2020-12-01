import { Component, OnInit } from '@angular/core';
import {$} from 'protractor';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {
  
  public contact = {

    logo: 'assets/Images/rachid.PNG',
    location: 'assets/Images/rachid.PNG'

  };
  constructor() { }

  ngOnInit() {


  }

}
