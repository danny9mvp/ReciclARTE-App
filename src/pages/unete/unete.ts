import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, AlertController } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup, FormControl  } from '@angular/forms';
import { RestProvider } from '../../providers/rest/rest';
/**
 * Generated class for the UnetePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-unete',
  templateUrl: 'unete.html',
})
export class UnetePage {

  private formUnete: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerta: AlertController, public formBuilder: FormBuilder,
  public restProvider: RestProvider) {
    this.formUnete = formBuilder.group({
      pNombre: ['', Validators.compose([Validators.maxLength(12), Validators.required])],
      sNombre: ['', Validators.compose([Validators.maxLength(13)])],
      pApellido: ['', Validators.compose([Validators.maxLength(12), Validators.required])],
      sApellido: ['', Validators.compose([Validators.maxLength(13)])],
      documento: ['', Validators.compose([Validators.maxLength(15), Validators.required])],
      nick: ['', Validators.compose([Validators.maxLength(25), Validators.required])],
      email: ['', Validators.compose([Validators.maxLength(17), Validators.required])],
      emailServer: ['gmail'],
      barrio: ['1'],
      pPass: ['', Validators.compose([Validators.maxLength(35), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$'), Validators.required])],
      sPass: ['', Validators.compose([Validators.maxLength(35),Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,}$'), Validators.required])]
    });    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }
  validarPpassSpass(): boolean{
    if(this.formUnete.get('pPass').value == this.formUnete.get('sPass').value){
      return true;
    }
    else{
      return false;
    }
  }
  signIn(){    
    let alertaSuccess=this.alerta.create({
      title:"Información",
      message: "Sesion iniciada.",
      buttons: ["Entendido"]
    });
    let alertaNoValido=this.alerta.create({
      title:"Error",
      message: "Hay uno o más campos obligatorios sin llenar."+this.formUnete.get('pPass').value,
      buttons: ["Entendido"]
    });
    let alertaNoCoinciden=this.alerta.create({
      title:"Error",
      message: "Las contraseñas no coinciden",
      buttons: ["Entendido"]
    });
    if(!this.formUnete.valid){
      alertaNoValido.present();
    }
    else if(!this.validarPpassSpass()){
      alertaNoCoinciden.present();
    }
    else{
      alertaSuccess.present();
      let json = {
        "nombres":this.formUnete.controls.pNombre.value + " " + this.formUnete.controls.sNombre.value,
        "apellidos":this.formUnete.controls.pApellido.value + " " + this.formUnete.controls.sApellido.value,
        "email":this.formUnete.controls.email.value+"@"+this.formUnete.controls.emailServer.value,
        "identificacion":this.formUnete.controls.documento.value,
        "nick":this.formUnete.controls.nick.value,
        "clave":this.formUnete.controls.pPass.value,
        "activo":true,
        "barrio":parseInt(this.formUnete.controls.barrio.value, 10)
      };
      //this.restProvider.registrarme(json);
    }
  }
}