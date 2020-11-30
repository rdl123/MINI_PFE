import {Component, OnInit, TemplateRef} from '@angular/core';
import { IncidentService } from '../services/Incident.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {UserService} from '../services/UserService';
import {LIST_STATUTS} from '../Util/constantes';
class test {
  id: number;
  name: String;

}

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})

export class AdministrationComponent implements OnInit {

  statut: any;
  Incidents: any;
  stat: any;
  modalRef: BsModalRef;
  ListUserSec: any;
  listProf = [];
  StatutChoisi: any;
  SecteurIncident: any;
  prof = [];
  p: test;
  IncidentChoisi: any;
  motifChoisi:string;
  userChoisi: any;
  comportement:any;
    constructor( private incidentService: IncidentService,
                 private modalService: BsModalService,
                 private userService: UserService) {
      this.p = new test();
      this.statut = ['validé', 'rejeté'];
      this.incidentService.findAllIncident().subscribe(
        data => {
          this.Incidents = data;
         // console.log(this.Incidents);
        }
      );
      this.userService.findUserSec().subscribe(data => {
        this.ListUserSec = data;
       // console.log(this.ListUserSec);
      });


     }
 /* affectProf() {
    this.prof = [];
    console.log(this.ListUserSec[0][0]);
    for (let i = 0; i < this.ListUserSec.length; i++) {

        if (this.ListUserSec[i][0] == this.SecteurIncident) {
          this.p = {};
          this.p.id = this.ListUserSec[i][1];
          this.p.name = this.ListUserSec[i][2];
          this.prof.push(this.p);

      }


    }

    console.log('this.prof', this.prof);

    }*/


    openModal(template: TemplateRef<any>, i) {
       this.IncidentChoisi = i;
       this.SecteurIncident = i.secteur.secteur;
       console.log(this.SecteurIncident);
       this.modalRef = this.modalService.show(template);

  }
  getStatut(evt) {
    this.StatutChoisi = evt.target.value;
    console.log(this.StatutChoisi);
    this.prof = [];
    console.log(this.ListUserSec[0][0]);
    for (let i = 0; i < this.ListUserSec.length; i++) {

      if (this.ListUserSec[i][0] == this.SecteurIncident) {
        this.p = {id: null,
           name: null
        };
        this.p.id = this.ListUserSec[i][1];
        this.p.name = this.ListUserSec[i][2];
        this.prof.push(this.p);
        console.log(this.prof);
        console.log(this.p);

      }

    }

    console.log('this.prof', this.prof);

  }
  do2(evt) {
    console.log(evt.target.value);
    this.userService.finbById(evt.target.value).subscribe(
      data => {
        console.log(data);
        this.userChoisi = data;
        console.log(this.userChoisi);

      }
    );

  }
  motif(evt){

    this.motifChoisi = evt.target.value;
  }

  ngOnInit() {
  }
  submit() {
      if (this.StatutChoisi == this.statut[0]) {
        this.IncidentChoisi.statut = this.StatutChoisi;
        this.IncidentChoisi.user = this.userChoisi;
         this.incidentService.updateIncident(this.IncidentChoisi).subscribe(
           data=>{
             console.log(data);

           }
         )
      }
      else{
        this.IncidentChoisi.statut = this.StatutChoisi;
        this.IncidentChoisi.motif = this.motifChoisi;
        this.incidentService.updateIncident(this.IncidentChoisi).subscribe(
          data=>{
            console.log(data);


          }
        )

      }
    this.StatutChoisi=null;
  }

}
