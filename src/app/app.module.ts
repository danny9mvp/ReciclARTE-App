import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { HomePage } from '../pages/home/home';
import { UnetePage } from '../pages/unete/unete';
import { IngresaPage } from '../pages/ingresa/ingresa';
import { AcercaDePage } from '../pages/acerca-de/acerca-de';
import { MapaPage } from '../pages/mapa/mapa';
import { GuiUsuarioPage } from '../pages/gui-usuario/gui-usuario';
import { EvaluacionesPage } from '../pages/evaluaciones/evaluaciones';
import { TipsPage } from '../pages/tips/tips';
import { HttpClientModule } from '@angular/common/http';
import { RestProvider } from '../providers/rest/rest';
import { Geolocation } from '@ionic-native/geolocation';

import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,    
    HomePage,
    UnetePage,
    IngresaPage,
    AcercaDePage,
    MapaPage,
    GuiUsuarioPage,
    EvaluacionesPage,
    TipsPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    HomePage,
    UnetePage,
    IngresaPage,
    AcercaDePage,
    MapaPage,
    GuiUsuarioPage,
    EvaluacionesPage,
    TipsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    Geolocation
  ]
})
export class AppModule {}
