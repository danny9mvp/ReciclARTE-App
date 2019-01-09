import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UnetePage } from '../unete/unete';
import { IngresaPage } from '../ingresa/ingresa';
import { RestProvider } from '../../providers/rest/rest';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public users: any;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController) {
    this.menuCtrl.enable(false, 'menuPrincipal');
  }
  redirectToUnete(){
  	this.navCtrl.push(UnetePage);
  }
  redirectToIngresa(){
  	this.navCtrl.push(IngresaPage);
  }
}
