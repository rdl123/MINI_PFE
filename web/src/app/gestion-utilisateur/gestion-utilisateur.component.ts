import {Component, OnInit, TemplateRef} from '@angular/core';
import {UserService} from '../services/UserService';
import {HttpClient} from '@angular/common/http';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
import {User} from '../entities/User';
import {SecteurService} from '../services/Secteur.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Secteur} from '../entities/Secteur';
import {data} from '../../assets/data/incidents';
import {NULL_EXPR} from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-gestion-utilisateur',
  templateUrl: './gestion-utilisateur.component.html',
  styleUrls: ['./gestion-utilisateur.component.scss']
})
export class GestionUtilisateurComponent implements OnInit {
listUsers: any;
listProf = [];
  modalRef: BsModalRef;
  user: User;
  ListSecteur: any;
  idSecteurChoisi: any;
  data: any;
  errDuplicqted: string;
  errusername: string;
  errfullname: string;
  item: any;
  errpassword: string;
  i: number;
  selectedSecteur2: any;
  formData: FormGroup = this.formBuilder.group({
  username: [null],
  fullname: [null],
  password: [null],
  organisme: [null],
  email: [null],
  telephone: [null],
  secteurUser : [null]
  });
  constructor(private userService: UserService, private  http: HttpClient,
              private modalService: BsModalService,
              private Secteurservice: SecteurService, private formBuilder: FormBuilder) {
    this.user = new User();
    this.user.secteurUser = new Secteur();
    this.getSecteur();
    this.i = 12;
  }

  ngOnInit() {
    this.userService.findAllUsers().subscribe(
      data => {
        this.listUsers = data;
        for (let i = 0; i < this.listUsers.length; i++) {
          if (this.listUsers[i].role.role == 'professionnel') {
            this.listProf.push(this.listUsers[i]);
          }
        }
        console.log(this.listUsers);
        console.log(this.listUsers[1].fullname);
      }
    );
  }
  getSecteur() {
    this.Secteurservice.findAllSecteur().subscribe(
      data => {this.ListSecteur = data;
      }
    );
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);



  }
  do2(evt) {
    this.Secteurservice.findSecteurById(evt.target.value).subscribe( data => {
      this.idSecteurChoisi = evt.target.value;
      this.data = data;
      this.user.secteurUser.id = this.data.id;
      this.user.secteurUser.secteur = this.data.secteur;

    });
  }
  checkUsername(evt) {

    for (let i = 0; i < this.listUsers.length; i++) {
      console.log('ali');
      if (this.user.username == this.listUsers[i].username) {

        this.errusername = 'ce champ existe deja ';
        console.log(this.user.username);
      } else {
        this.errusername = null;
      }

    }
  }
  checkUsername1(evt) {
    console.log('this.user', this.listUsers);
    console.log('this.item', this.item);
    for (let i = 0; i < this.listUsers.length; i++) {
      console.log('ali');
      if (this.item.username == this.listUsers[i].username && this.item.id != this.listUsers[i].id) {

        this.errusername = 'ce champ existe deja ';
        console.log(this.user.username);
      }

    }
  }
  add() {
    this.user.role.role = 'professionnel';
    this.i ++;
    this.user.id = this.i;
    this.userService.addUser(this.user).subscribe(
      data => {
             console.log(data);
             this.errDuplicqted = '';
             this.user.username = null;
             this.user.telephone = null;
             this.user.email = null;
             this.user.organisme = null;
             this.user.password = null;
             this.user.fullname = null;
      },
      err => {

          if (this.user.password == null) {this.errpassword = 'ce champ est obligatoire'; }
          if (this.user.fullname == null) {this.errfullname = 'ce champ est obligatoire'; }

          if (this.user.username == null) {
          this.errusername = 'ce champ est obligatoire'; }
      }

    );
    console.log(this.user);

  }
  update() {
    this.user.role.role = 'professionnel';
    console.log(this.item);

    this.userService.updateuser(this.item).subscribe(
      data => {
        console.log(data);

      },
      err => {

        if (this.item.password == null) {this.errpassword = 'ce champ est obligatoire'; }
        if (this.item.fullname == null) {this.errfullname = 'ce champ est obligatoire'; }

        if (this.item.username == null) {
          this.errusername = 'ce champ est obligatoire'; }
      }

    );
    console.log(this.user);
  }
  openModal1(template: TemplateRef<any>, item) {
    this.modalRef = this.modalService.show(template);
    this.item = item;
    this.selectedSecteur2 = this.item.secteur.secteur;
    // this.item.secteurUser.secteur;

    console.log(this.selectedSecteur2);
  }
  hide() {
    this.errusername = null;
    this.errpassword = null;
    this.errfullname = null;
    this.user.username = null;
    this.user.fullname = null;
    this.user.password = null;
    this.modalRef.hide();
  }

}
