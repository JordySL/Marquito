import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { tb_login } from '../../models/tb_login';
//RUTA y llama la CLASE ServiciosLoginProvider 
//el cual tiene funciones como LogIn.
//con un punto despues del ServiciosLoginProvider
//ejemplo ServiciosLoginProvider. 
//puedes ver que funciones tiene, te ayuda el Visual Code a hacer eso
import { ServiciosLoginProvider } from '../../providers/servicios/servicios-login';
import { HomePage } from '../home/home';
import { RegistroPage } from '../registro/registro';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public _serviceLogin: ServiciosLoginProvider,
    private _storage: Storage) {
  }
  Objeto :any = {
    DNI : "",
    Password : ""
  };
  ionViewDidLoad() {
  }
  INGRESAR(Objeto : any): void{
  if(Objeto.DNI !== "" && Objeto.Password !== ""){
    let data = new tb_login(Objeto.DNI,Objeto.Password);
    //agregar -> this. <- a todo lo que tengas fuera de la funcion
    // this._serviceLogin llama de la carpeta a la funcion
    //LogIN que esta en la carpeta -> providers/servicios/servicios-login.ts
    //Se encuenta Arriba la ruta igual.
    this._serviceLogin.LogIn(data).subscribe((data : any) => {
    //Data es toda la informacion devuelva del WebServices
    //data.USUCOD <- Codigo del Usuario,
    //Si data.USUCOD es mayor a 0 pasa, sino falla
    //No Existe el Usuario en caso sea menor a 0
    if(data.USUCOD > 0){
      this._storage.set('NOMBRE', data.USUNOM);
      //navCtrl.setRoot("Pagina a la que va a Ir")
      this.navCtrl.setRoot(HomePage);
      }
    });
  }
  }
  REGISTRARSE(){
    //navCtrl.setRoot("Pagina a la que va a Ir")
    this.navCtrl.setRoot(RegistroPage);
  }
}
