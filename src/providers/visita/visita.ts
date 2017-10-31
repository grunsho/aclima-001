import { Injectable } from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class VisitaProvider {

  public visitaListRef: firebase.database.Reference;
  constructor() {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.visitaListRef = firebase
          .database()
          .ref(`/userProfile/${user.uid}/eventList`);
      }
    });
  }

  createVisita(
    nombreClienteVisita: string,
    fechaVisita: string,
    rutClienteVisita: string,
    direccionClienteVisita: string,
    correoClienteVisita: string
  ): firebase.database.ThenableReference {
    return this.visitaListRef.push({
      name: nombreClienteVisita,
      date: fechaVisita,
      rut: rutClienteVisita,
      direccion: direccionClienteVisita,
      correo: correoClienteVisita
    });
  }

  getVisitaList(): firebase.database.Reference {
    return this.visitaListRef;
  }

  getVisitaDetail(visitaId: string): firebase.database.Reference {
    return this.visitaListRef.child(visitaId);
  }


}
