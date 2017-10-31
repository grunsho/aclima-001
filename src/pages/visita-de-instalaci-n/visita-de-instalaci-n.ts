import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevaVisitaPage } from '../nueva-visita/nueva-visita';
import { ArchivoDeVisitasPage } from '../archivo-de-visitas/archivo-de-visitas';

@Component({
  selector: 'page-visita-de-instalaci-n',
  templateUrl: 'visita-de-instalaci-n.html'
})
export class VisitaDeInstalaciNPage {

  constructor(public navCtrl: NavController) {
  }
  goToNuevaVisita(params){
    if (!params) params = {};
    this.navCtrl.push(NuevaVisitaPage);
  }
  goToArchivoDeVisitas(params){
    if (!params) params = {};
    this.navCtrl.push(ArchivoDeVisitasPage);
  }
}
