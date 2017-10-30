import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrearVisitaPage } from './crear-visita';

@NgModule({
  declarations: [
    CrearVisitaPage,
  ],
  imports: [
    IonicPageModule.forChild(CrearVisitaPage),
  ],
})
export class CrearVisitaPageModule {}
