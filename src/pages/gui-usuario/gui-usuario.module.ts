import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuiUsuarioPage } from './gui-usuario';

@NgModule({
  declarations: [
    GuiUsuarioPage,
  ],
  imports: [
    IonicPageModule.forChild(GuiUsuarioPage),
  ],
})
export class GuiUsuarioPageModule {}
