import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, MenuController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
import { Login } from './Login';
import { GuiUsuarioPage } from '../gui-usuario/gui-usuario';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the IngresaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ingresa',
  templateUrl: 'ingresa.html',
})
export class IngresaPage {
  
  private formIngresa: FormGroup;
  public datosSesion: any;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, public navParams: NavParams, public formBuilder: FormBuilder, public alerta: AlertController, public restProvider: RestProvider, private storage: Storage) {
  	this.formIngresa=formBuilder.group({
  		usuario: ['', Validators.required],
  		pass: ['', Validators.required]
  	});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IngresaPage');
  }

  logIn(){
  	const loginObj: Login = {
  		usuario:this.formIngresa.controls.usuario.value,
  		pass:this.formIngresa.controls.pass.value
  	};
  	try{
	  	this.restProvider.ingresar(loginObj).subscribe(data => {
	  		console.log(data.body);
        this.storage.set("nombres", data.body.nombres);
        this.storage.set("apellidos", data.body.apellidos);
        this.storage.set("nick", data.body.nick);
        this.storage.set("puntos", data.body.puntos);
	  		this.navCtrl.push(GuiUsuarioPage);
        this.menuCtrl.enable(true, 'menuPrincipal');
	  	},
	  	error => console.log(error)
	  	);
	  	let alertaSuccess = this.alerta.create({
	  		title: "Información",
	  		message: "Bienvenido.",
	  		buttons: ['Entendido']
	  	});	  	
	  	alertaSuccess.present();
  	}
  	catch(e){
  		console.log(e);
  		let alertaError = this.alerta.create({
	  		title: "Error",
	  		message: "Ha ocurrido un error",
	  		buttons: ['Entendido']
  		});
  		alertaError.present();
  	}  	
  }
  setDatosSesion(datos){
  		this.datosSesion=datos;
  }
  	getDatosSesion():Object{
  		return this.datosSesion;
  	}

}
