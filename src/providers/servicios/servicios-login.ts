import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Headers } from '@angular/http';
import { ServiciosProvider } from './servicios';
import 'rxjs/add/operator/map';
@Injectable()
export class ServiciosLoginProvider {

  constructor(public _httpClient: HttpClient 
    ,public _http: Http
    ,public _service: ServiciosProvider) {
  }
  header :Headers = new Headers({ 'Content-Type': 'application/json' });
  LogIn = function (Objeto: any)    {
    let data = this._service.PostData("/callfunctions/autenticacion.php", Objeto ,this.header);
    return data;
  }
}
