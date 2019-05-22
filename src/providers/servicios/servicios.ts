import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { Header } from 'ionic-angular';
import 'rxjs/add/operator/map';
@Injectable()
export class ServiciosProvider {
  Service : string = 'http://localhost/phpMarco';
  constructor(public _httpClient: HttpClient
    ,public _http: Http) {
  }
  PostData = function(url: string,value: any, header: Header){
    let data = this._http.post(this.Service+url, value, header)
    .map((response: any) => {
      if(response._body == "Bien"){
        var response = response._body;
        return response;
      }else if( response._body !== ""){
          var jsonresponse = JSON.parse(response._body);
          return jsonresponse;    
      }
        //.map((item: any) => item.mapFromResponse(item));
    });
    return data;
  }
  Post = function (url: string,header: Header){
    let data = this._http.post(this.Service+url, header)
    .map((response: any) => {
      var jsonresponse = JSON.parse(response._body);
      return jsonresponse;
        //.map((item: any) => item.mapFromResponse(item));
    });
    return data;
  }
}
