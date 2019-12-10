import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { EleccionComponent } from './components/eleccion/eleccion.component';
import { LoginPComponent } from './components/login-p/login-p.component';
import { LoginAComponent } from './components/login-a/login-a.component';
import { InicioPComponent } from './components/inicio-p/inicio-p.component';
import { NotasComponent } from './components/notas/notas.component';
import { CajaComponent } from './components/caja/caja.component';
import { Login } from './components/login.component/login.component.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'asd', component: LoginComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    EleccionComponent,
    LoginPComponent,
    LoginAComponent,
    InicioPComponent,
    NotasComponent,
    CajaComponent,
    Login.ComponentComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
