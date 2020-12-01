import { Component, OnInit, TemplateRef } from '@angular/core';
import { IncidentService } from '../services/Incident.service';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {LIST_STATUTS} from '../Util/constantes';
import {LoginService} from '../services/Login.service';
import {User} from '../entities/User';
@Component({
  selector: 'app-professionnel',
  templateUrl: './professionnel.component.html',
  styleUrls: ['./professionnel.component.scss']
})
export class ProfessionnelComponent implements OnInit {
statut: any;
  Incidentslist: any;
  ownIncidents = [];
  stat: any;
  item: any;
  list_statut = LIST_STATUTS;
  modalRef: BsModalRef;
  currentUser: User;
  currentRole: string;
  IdUserChoisi: any;
  user: any;
    constructor( private incidentService: IncidentService,
                 private modalService: BsModalService,
                 private loginService: LoginService) {
      this.statut = ['en cours de traitement', 'traité', 'bloqué'];
      /*this.incidentService.findAllIncident().subscribe(
        data => {
          this.Incidents = data;
          console.log(this.Incidents);
        }
      );*/
      this.loginService.currentUser.subscribe((newUser) => {
        this.currentRole = newUser ? newUser.role.role : null;
        console.log(this.currentRole);

      });

     }
     openModal(template: TemplateRef<any>, item) {
      this.modalRef = this.modalService.show(template);
      this.item = item;


}
  ngOnInit() {
    this.loginService.currentUser.subscribe(newUser => {
      this.currentUser = newUser;
      console.log( this.currentUser);
    });



  }
  ListerIncidentByUser() {
    this.ownIncidents = [];
    this.incidentService.findUserById(this.currentUser.id).subscribe(data => {
        this.IdUserChoisi = data;
        console.log(this.IdUserChoisi);
        for (let i = 0; i < this.IdUserChoisi.length; i++) {
          console.log(this.IdUserChoisi[i]);
          this.incidentService.findIncidentById(this.IdUserChoisi[i]).subscribe(data => {
              this.ownIncidents.push(data);
              console.log("avant", this.ownIncidents);
              for (let i = 0; i < this.ownIncidents.length; i++) {
              if (this.ownIncidents[i].statut == 'rejeté' || this.ownIncidents[i].statut == 'declare' ) {
                this.ownIncidents = this.ownIncidents.filter(obj => obj != this.ownIncidents[i]);
                console.log('apres',this.ownIncidents);

              }
            }

          });
        }

      });
  }
  changeStatut(e) {
    this.stat = e.target.value;
    console.log(this.stat);

  }

  submit() {
    this.item.statut = this.stat;
    this.incidentService.updateIncident(this.item).subscribe(

    );
    console.log(this.item);
  }

}
