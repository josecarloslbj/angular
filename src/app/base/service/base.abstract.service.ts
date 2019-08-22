import { HttpClient } from '@angular/common/http';

export abstract class BaseAbstractService<T, S> {
  protected _http: HttpClient;

  constructor(
    http: HttpClient
  ) {
    this._http = http;
  }
}
