import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { ServiciosProvider } from './servicios';
import { Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServiciosGeneralesProvider {
  header :Headers = new Headers({ 'Content-Type': 'application/json' });
  constructor(public _httpClient: HttpClient 
    ,public _http: Http
    ,public _service: ServiciosProvider) {
  }

  MaxID = function (Controlador :string, Objeto: any) {
    let data = this._service.PostData("/" + Controlador + "/MaximoID.php", Objeto,this.header);
    return data;
  }
  Lista = function (Controlador :string, Tipos :string) {
    let data = this._service.Post("/" + Controlador + "/Lista" + Tipos + "",this.header);
    return data;
  }
  IdPor = function (Controlador : string, Tipo : string, Objeto: any) {
      let data= this._service.PostData("/" + Controlador + "/IdPor" + Tipo + "", Objeto,this.header);
      return data;
  }
  Mantenimiento = function (Controlador : string, Tipo : string, Objeto: any) {
      let data = this._service.PostData("/" + Controlador + "/Mantenimiento" + Tipo + "", Objeto,this.header);
      return data;
  }
  Insertar = function (Controlador : string, Tipo: string, Objeto: any) {
      let data = this._service.PostData("/" + Controlador + "/Insertar" + Tipo + "", Objeto,this.header);
      return data;
  }
  Modificar = function (Controlador: string, Tipo: string, Objeto: any) {
      let data = this._service.PostData("/" + Controlador + "/Modificar" + Tipo + "", Objeto,this.header);
      return data;
  }
  Borrar = function (Controllador: string, Tipo :string, Objeto: any) {
      let data = this._service.PostData("/" + Controllador + "/Borrar" + Tipo + "", Objeto,this.header);
      return data;
  }
  ListaDe = function (Controlador: string, Tipo: string, Objeto: any) {
      let data = this._service.PostData("/" + Controlador + "/ListaDe" + Tipo + "", Objeto,this.header);
      return data;
  }
}
