import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { VisitaProvider } from '../../providers/visita/visita';

@IonicPage({
  segment: "visita-detail/:visitaId"
})
@Component({
  selector: 'page-detalle-visita',
  templateUrl: 'detalle-visita.html',
})
export class DetalleVisitaPage {
  public currentVisita: any = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public visitaProvider: VisitaProvider
  ) { }

  ionViewDidLoad() {
    this.visitaProvider
      .getVisitaDetail(this.navParams.get("visitaId"))
      .on("value", visitaSnapshot => {
        this.currentVisita = visitaSnapshot.val();
        this.currentVisita.id = visitaSnapshot.key;
      });
  }

}
