import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseAbstractService } from '../base/service/base.abstract.service';


@Injectable()
export class LoginService {

  protected _http: HttpClient;

  constructor(http: HttpClient) {
    this._http = http;
  }

  efetuarLogin(obj: any) {

    const url = 'http://localhost:2646/Api/Principal';
    return this._http.post(url, obj);
  }

}
