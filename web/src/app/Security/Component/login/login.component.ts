import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SecutityService} from '../../../services/security.service';
import {LoginDtoData} from '../shared/data/login-dto.data';
import {LoginService} from '../../../services/Login.service';
import {User} from '../../../entities/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
formData: FormGroup = this.formBuilder.group({
  username:[null],
  password:[null]
});

  currentUser: User;

  constructor(private formBuilder: FormBuilder,
              private securityService: SecutityService,
              private loginService: LoginService) { }

  ngOnInit() {
    this.loginService.currentUser.subscribe(newUser => {
      this.currentUser = newUser;
    });
  }

  onlogin() {
    let data: LoginDtoData = new LoginDtoData();
    data.username = this.formData.get('username').value;
    data.password = this.formData.get('password').value;
    console.log(data);
    this.loginService.login(data).subscribe(res => {
      if (res) {
        console.log(res);
        this.loginService.currentUser.next(res);
      } else {
        // todo: password or username are wrong
        alert('error');
      }
    });
  }


}
