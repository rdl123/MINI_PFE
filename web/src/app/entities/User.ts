import { Role } from './Role';
import {Secteur} from './Secteur';

export class User {
  id: number;
  username: string;
  fullname: string;
  password: string;
  role: Role;
  organisme:string;
  email:string;
  telephone:string;
  secteurUser : Secteur;
}
