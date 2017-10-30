import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListaVisitaPage } from './lista-visita';

@NgModule({
  declarations: [
    ListaVisitaPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaVisitaPage),
  ],
})
export class ListaVisitaPageModule {}
