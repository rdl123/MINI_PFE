import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProvinceService{
  url="http://localhost:9090"
      constructor(private http:HttpClient ) {
       }
       
       public findAll() {

        return this.http.get(this.url + '/Province/find/all' );

    }

    public findprovinceById(id: number) {
        return this.http.get(this.url + '/Province/find/' + id);
    }
       

}
    


