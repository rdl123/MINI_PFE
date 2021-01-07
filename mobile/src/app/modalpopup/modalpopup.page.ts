import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';
import {API_URL} from '../utils/constants';
import {IncidentService} from '../services/Incident.service';
@Component({
  selector: 'app-modalpopup',
  templateUrl: './modalpopup.page.html',
  styleUrls: ['./modalpopup.page.scss'],
})
export class ModalpopupPage implements OnInit {
    variableIteam:any;
    ListeChoisi:any;
  constructor(private modalController: ModalController,private params: NavParams,private incidentService: IncidentService) {
      this.variableIteam = params.get('id');
      this. getList();
  }

  ngOnInit() {
  }
    getList()
    {
        this.incidentService.findIncidentById(this.variableIteam).subscribe(data =>{
          console.log(data);
          this.ListeChoisi= data;
        });
    }
    CloseModal() {
        this.modalController.dismiss();
    }
}
