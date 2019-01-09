import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IngresaPage } from './ingresa';

@NgModule({
  declarations: [
    IngresaPage,
  ],
  imports: [
    IonicPageModule.forChild(IngresaPage),
  ],
})
export class IngresaPageModule {}
