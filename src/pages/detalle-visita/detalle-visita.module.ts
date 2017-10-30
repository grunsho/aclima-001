import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalleVisitaPage } from './detalle-visita';

@NgModule({
  declarations: [
    DetalleVisitaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalleVisitaPage),
  ],
})
export class DetalleVisitaPageModule {}
