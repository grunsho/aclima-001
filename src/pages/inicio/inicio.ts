import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { VisitaDeInstalaciNPage } from '../visita-de-instalaci-n/visita-de-instalaci-n';
import { NuevaVisitaPage } from '../nueva-visita/nueva-visita';
import { ArchivoDeVisitasPage } from '../archivo-de-visitas/archivo-de-visitas';
import { MantenimientoPreventivoPage } from '../mantenimiento-preventivo/mantenimiento-preventivo';
import { NuevoMantenimientoPage } from '../nuevo-mantenimiento/nuevo-mantenimiento';
import { ArchivoDeMantenimientosPage } from '../archivo-de-mantenimientos/archivo-de-mantenimientos';

@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html'
})
export class InicioPage {

  constructor(public navCtrl: NavController) {
  }
  goToVisitaDeInstalaciN(params){
    if (!params) params = {};
    this.navCtrl.push(VisitaDeInstalaciNPage);
  }goToNuevaVisita(params){
    if (!params) params = {};
    this.navCtrl.push(NuevaVisitaPage);
  }goToArchivoDeVisitas(params){
    if (!params) params = {};
    this.navCtrl.push(ArchivoDeVisitasPage);
  }goToMantenimientoPreventivo(params){
    if (!params) params = {};
    this.navCtrl.push(MantenimientoPreventivoPage);
  }goToNuevoMantenimiento(params){
    if (!params) params = {};
    this.navCtrl.push(NuevoMantenimientoPage);
  }goToArchivoDeMantenimientos(params){
    if (!params) params = {};
    this.navCtrl.push(ArchivoDeMantenimientosPage);
  }
}
