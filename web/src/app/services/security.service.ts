import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {AND, API_URL, INCIDENT_AND_QUERY, INCIDENT_OR_QUERY} from '../Util/constantes';
import {LoginDtoData} from '../Security/Component/shared/data/login-dto.data';
@Injectable({
  providedIn: 'root'
})
export class SecutityService{
  constructor(private  http:HttpClient){

  }
  login(data: LoginDtoData ){
    return this.http.post(API_URL,data);
  }
}
