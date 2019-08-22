import { Component, OnInit, Injector } from '@angular/core';
import { LoginService } from './login.service';
import { BaseComponent } from '../base/base.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  private _loginService: LoginService;

  constructor(loginService: LoginService) {

    this._loginService = loginService;

  }

  ngOnInit(): void {

  }

  login() {

    const obj_: any = new Object();
    obj_.nome = 'pedrotese@silva.com.br';
    obj_.senha = 'aaaa123abc';

    this._loginService.efetuarLogin(obj_)
      .subscribe((res) => {

        console.log(res);
      });
  }
}
