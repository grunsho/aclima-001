import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NuevoMantenimientoPage } from '../nuevo-mantenimiento/nuevo-mantenimiento';
import { ArchivoDeMantenimientosPage } from '../archivo-de-mantenimientos/archivo-de-mantenimientos';

@Component({
  selector: 'page-mantenimiento-preventivo',
  templateUrl: 'mantenimiento-preventivo.html'
})
export class MantenimientoPreventivoPage {

  constructor(public navCtrl: NavController) {
  }
  goToNuevoMantenimiento(params){
    if (!params) params = {};
    this.navCtrl.push(NuevoMantenimientoPage);
  }goToArchivoDeMantenimientos(params){
    if (!params) params = {};
    this.navCtrl.push(ArchivoDeMantenimientosPage);
  }
}
