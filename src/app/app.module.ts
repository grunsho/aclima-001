import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InicioPage } from '../pages/inicio/inicio';
import { VisitaDeInstalaciNPage } from '../pages/visita-de-instalaci-n/visita-de-instalaci-n';
import { NuevaVisitaPage } from '../pages/nueva-visita/nueva-visita';
import { ArchivoDeVisitasPage } from '../pages/archivo-de-visitas/archivo-de-visitas';
import { MantenimientoPreventivoPage } from '../pages/mantenimiento-preventivo/mantenimiento-preventivo';
import { NuevoMantenimientoPage } from '../pages/nuevo-mantenimiento/nuevo-mantenimiento';
import { ArchivoDeMantenimientosPage } from '../pages/archivo-de-mantenimientos/archivo-de-mantenimientos';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { VisitaProvider } from '../providers/visita/visita';
import { PerfilProvider } from '../providers/perfil/perfil';

@NgModule({
  declarations: [
    MyApp,
    InicioPage,
    VisitaDeInstalaciNPage,
    NuevaVisitaPage,
    ArchivoDeVisitasPage,
    MantenimientoPreventivoPage,
    NuevoMantenimientoPage,
    ArchivoDeMantenimientosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    InicioPage,
    VisitaDeInstalaciNPage,
    NuevaVisitaPage,
    ArchivoDeVisitasPage,
    MantenimientoPreventivoPage,
    NuevoMantenimientoPage,
    ArchivoDeMantenimientosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    VisitaProvider,
    PerfilProvider
  ]
})
export class AppModule {}