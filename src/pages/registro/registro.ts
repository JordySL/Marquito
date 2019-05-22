import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ServiciosGeneralesProvider } from '../../providers/servicios/servicios-generales';
import { tb_Registro } from '../../models/tb_Registro';
import 'rxjs/add/operator/map';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public _serviceGeneral: ServiciosGeneralesProvider) {
  }
  Objeto :any = {
    USUNOM : "",
    USUAPE : "",
    USUNAC : "",
    USUDIR : "",
    USUCOR : "",
    LOGNOM : "",
    LOGCON : "",
    LOGCONREP : "",
    USUREG : "",
    FECREG : "",
    ESTREG : 1,
  };
  ionViewDidLoad() {

  }
  REGISTRO(Objeto : any): void{
    var USUCOD = 0;
    var LOGCOD = 0;
    if(Objeto.LOGCON == Objeto.LOGCONREP){
      var usuario = { TABLA : 'tb_usuarios', ID : 'USUCOD' };
      this._serviceGeneral.MaxID("callfunctions",usuario)
      .subscribe((MaximoID_Tabla_tb_usuarios : any) => {

        USUCOD = MaximoID_Tabla_tb_usuarios;
        
        var login = { TABLA : 'tb_login',ID : 'LOGCOD' };
          this._serviceGeneral.MaxID("callfunctions",login)        
          .subscribe((MaximoID_Tabla_tb_login : any) => {

          LOGCOD = MaximoID_Tabla_tb_login;

          var datenew = new Date();
          let dateobj :string = datenew.getFullYear().toString();
          if(10 > datenew.getMonth()){
            dateobj += '-0'+datenew.getMonth().toString();
          }else{
            dateobj += "-"+datenew.getMonth().toString();
          }
          if(10 > datenew.getDay()){
            dateobj += '-0'+datenew.getDay().toString();
          }else{
            dateobj += "-"+datenew.getDay().toString();
          }
          
          let data3 = new tb_Registro(USUCOD,LOGCOD,
          Objeto.USUNOM,Objeto.USUAPE,
          Objeto.USUNAC,Objeto.USUDIR,Objeto.USUCOR,
          Objeto.LOGNOM,Objeto.LOGCON,Objeto.USUNOM,  dateobj, 1);
          this._serviceGeneral.Insertar("callfunctions","Usuario.php",data3)
          .subscribe((data : any) => {
            console.log(data);
            this.navCtrl.setRoot(LoginPage);
          })
        })
      })
    }
  }
}
