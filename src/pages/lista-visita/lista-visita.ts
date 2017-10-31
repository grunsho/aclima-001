import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { VisitaProvider } from '../../providers/visita/visita';

@IonicPage()
@Component({
  selector: 'page-lista-visita',
  templateUrl: 'lista-visita.html',
})
export class ListaVisitaPage {
  public visitaList: Array<any>;

  constructor(
    public navCtrl: NavController,
    public visitaProvider: VisitaProvider
  ) { }

  ionViewDidLoad() {
    this.visitaProvider.getVisitaList().on("value", visitaListSnapshot => {
      this.visitaList = [];
      visitaListSnapshot.forEach(snap => {
        this.visitaList.push({
          id: snap.key,
          name: snap.val().name,
          rut: snap.val().rut,
          direccion: snap.val().direccion,
          telefono: snap.val().telefono,
          correo: snap.val().correo
        });
        return false;
      });
    });
  }

  goToVisitaDetail(visitaId): void {
    this.navCtrl.push('DetalleVisitaPage', { visitaId: visitaId });
  }

}
