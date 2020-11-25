import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../utils/constants';
@Injectable({
    providedIn: 'root'
})
export class TypeService {
    constructor(private http: HttpClient) {}
    findAllType() {

        return this.http.get(API_URL + '/Type/find/all' );

    }
    findTypeById(id: number) {
        return this.http.get(API_URL + '/Type/find/' + id);
    }
    findTypeBySecteur(id: number){
        return this.http.get(API_URL + '/Type/find/secteur/' + id);
    }

}
