import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the GuiUsuarioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gui-usuario',
  templateUrl: 'gui-usuario.html',
})
export class GuiUsuarioPage {
  ranking: any;

  nombres: string;
  apellidos: string;
  nick: string;
  puntos: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, private storage: Storage) {
  	this.getRanking();  	
  }
  getRanking(){
  	this.restProvider.getRanking().
  	then(data => {
  		this.ranking = data;  		
  	});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GuiUsuarioPage');    
    this.storage.get('nombres').then(val=>{
    	console.log(val);
    });
    this.storage.get('apellidos').then(val=>{
    	console.log(val);
    });;
    this.storage.get('nick').then(val=>{
    	console.log(val);
    });;
    this.storage.get('puntos').then(val=>{
    	console.log(val);
    });;            
  }

}
