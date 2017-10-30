import { Component } from '@angular/core';
import {
  Alert,
  AlertController,
  IonicPage,
  NavController
} from 'ionic-angular';
import { PerfilProvider } from "../../providers/perfil/perfil";
import { AuthProvider } from "../../providers/auth/auth";

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  public userProfile: any;
  public birthDate: string;

  constructor(
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    public authProvider: AuthProvider,
    public perfilProvider: PerfilProvider
  ) {
  }

  ionViewDidLoad() {
    this.perfilProvider.getUserProfile().on("value", userProfileSnapshot => {
      this.userProfile = userProfileSnapshot.val();
      this.birthDate = userProfileSnapshot.val().birthDate;
    });
  }

  logOut(): void {
    this.authProvider.logoutUser().then(() => {
      this.navCtrl.setRoot("LoginPage");
    });
  }

  updateName(): void {
    const alert: Alert = this.alertCtrl.create({
      message: "Nombre y apellido",
      inputs: [
        {
          name: "firstName",
          placeholder: "Nombre",
          value: this.userProfile.firstName
        },
        {
          name: "lastName",
          placeholder: "Apellido",
          value: this.userProfile.lastName
        }
      ],
      buttons: [
        { text: "Cancelar" },
        {
          text: "Guardar",
          handler: data => {
            this.perfilProvider.updateName(data.firstName, data.lastName);
          }
        }
      ]
    });
    alert.present();
  }

  updateDOB(birthDate: string): void {
    this.perfilProvider.updateDOB(birthDate);
  }

  updateEmail(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [{ name: 'newEmail', placeholder: 'Nuevo correo electrónico' },
      { name: 'password', placeholder: 'Contraseña actual', type: 'password' }],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Guardar',
          handler: data => {
            let newEmail = data.newEmail;
            this.perfilProvider
              .updateEmail(data.newEmail, data.password)
              .then(() => { console.log('Email Changed Successfully'); })
              .catch(error => { console.log('ERROR: ' + error.message); });
          }
        }]
    });
    alert.present();
  }
  updatePassword(): void {
    let alert: Alert = this.alertCtrl.create({
      inputs: [
        { name: 'newPassword', placeholder: 'Nueva contraseña', type: 'password' },
        { name: 'oldPassword', placeholder: 'Contraseña actual', type: 'password' }],
      buttons: [
        { text: 'Cancelar' },
        {
          text: 'Guardar',
          handler: data => {
            this.perfilProvider.updatePassword(
              data.newPassword,
              data.oldPassword
            );
          }
        }
      ]
    });
    alert.present();
  }

}
