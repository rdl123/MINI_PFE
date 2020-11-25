import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API_URL} from '../utils/constants';
@Injectable({
    providedIn: 'root'
})
export class ProvinceService {
    constructor(private http: HttpClient) {}
    findAll() {

        return this.http.get(API_URL + '/Province/find/all' );

    }

    findprovinceById(id: number) {
        return this.http.get(API_URL + '/Province/find/' + id);
    }




}
