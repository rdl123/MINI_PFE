import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
  export class TypeService {
    url = 'http://localhost:9090';
        constructor(private http: HttpClient ) {
         }

         public onloadTypes() {
         return this.http.get(this.url + '/Types');
          // .subscribe(data=>{this.Secteurs=data;},err=>{console.log(err);})
         }
         findAllType() {

          return this.http.get(this.url + '/Type/find/all' );

      }
      findTypeById(id: number) {
          return this.http.get(this.url + '/Type/find/' + id);
      }

     findTypeBySecteur(id: number) {
       return this.http.get(this.url + '/Type/find/secteur/' + id);
     }

  }
