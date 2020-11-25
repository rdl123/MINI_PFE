import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../utils/constants';
@Injectable({
    providedIn: 'root'
})
export class SecteurService {
    constructor(private http: HttpClient) {}
    findAllSecteur() {

        return this.http.get(API_URL + '/Secteur/find/all' );

    }
    findSecteurById(id: number)
    {

        return this.http.get(API_URL + '/Secteur/find/' + id);
    }


}
