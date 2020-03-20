import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { TechComponent } from './tech/tech.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';
import {FormsModule} from '@angular/forms';
import {StatutConnecteService} from './auth/statut-connecte.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';
import { Sessionformation1Component } from './sessionformation1/sessionformation1.component';
import { Certifications2Component } from './certifications2/certifications2.component';
import { Finansessionformation3Component } from './finansessionformation3/finansessionformation3.component';
import { Finansessionformation4Component } from './finansessionformation4/finansessionformation4.component';
import { Listesessions5Component } from './listesessions5/listesessions5.component';
import { Synthesesessions6Component } from './synthesesessions6/synthesesessions6.component';
import { Detailrevenusession7Component } from './detailrevenusession7/detailrevenusession7.component';
import { Detailcoutsformateur8Component } from './detailcoutsformateur8/detailcoutsformateur8.component';
import { Detailautrecoutssession9Component } from './detailautrecoutssession9/detailautrecoutssession9.component';
import { MenuComponent } from './menu/menu.component';


const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService]}, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent},
  { path: '', redirectTo: '/tech', pathMatch: 'full'}
];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    Sessionformation1Component,
    Certifications2Component,
    Finansessionformation3Component,
    Finansessionformation4Component,
    Listesessions5Component,
    Synthesesessions6Component,
    Detailrevenusession7Component,
    Detailcoutsformateur8Component,
    Detailautrecoutssession9Component,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
