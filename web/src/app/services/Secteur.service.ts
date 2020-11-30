import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class SecteurService{
    Incidents:any;
    Secteurs:any;
    url="http://localhost:9090"
        constructor(private http:HttpClient ) {
            
         }
         
         
         findAllSecteur() {

          return this.http.get(this.url + '/Secteur/find/all' );
  
      }
      findSecteurById(id: number)
      {
  
          return this.http.get(this.url + '/Secteur/find/' + id);
      }
  
  }