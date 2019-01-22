import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { InicioPage } from '../pages/inicio/inicio';
import { HomePage } from '../pages/home/home';
import { GuiUsuarioPage } from '../pages/gui-usuario/gui-usuario';
import { MapaPage } from '../pages/mapa/mapa';
import { EvaluacionesPage } from '../pages/evaluaciones/evaluaciones';
import { TipsPage } from '../pages/tips/tips';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  pages: Array<{title: string, component: any}>;
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    this.pages = [
      { title: 'Inicio', component: InicioPage},    
      { title: 'Ranking', component: GuiUsuarioPage},      
      { title: 'Recolección y rutas de aseo', component: MapaPage },
      { title: 'Tips de reciclaje', component: TipsPage },
      { title: 'Evaluaciones', component: EvaluacionesPage },
      { title: 'Cerrar sesión', component: HomePage }
    ];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  abrirPagina(p){
    this.nav.setRoot(p.component);
  }
}

