import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { VisitaProvider } from '../../providers/visita/visita';

@Component({
  selector: 'page-nueva-visita',
  templateUrl: 'nueva-visita.html'
})
export class NuevaVisitaPage {

  constructor(
    public navCtrl: NavController,
    public visitaProvider: VisitaProvider
  ) {}

  createVisita(
    nombreClienteVisita: string,
    direccionClienteVisita: string,
    rutClienteVisita: string,
    telefonoClienteVisita: string,
    correoClienteVisita: string
  ): void {
    this.visitaProvider
      .createVisita(nombreClienteVisita, direccionClienteVisita, rutClienteVisita, telefonoClienteVisita, correoClienteVisita)
      .then(newVisita => {
        this.navCtrl.pop();
      });
  }
}
