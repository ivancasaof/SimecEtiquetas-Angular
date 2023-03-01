import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PoModule } from '@po-ui/ng-components';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faWifi3 } from '@fortawesome/free-solid-svg-icons';
import { ProdBarraComponent } from './components/pages/prod-barra/prod-barra.component';
import { ProdRoloComponent } from './components/pages/prod-rolo/prod-rolo.component';
import { ProdFiomaqComponent } from './components/pages/prod-fiomaq/prod-fiomaq.component';
import { ProdEndirComponent } from './components/pages/prod-endir/prod-endir.component';
import { ProdBarraProducaoComponent } from './components/pages/prod-barra-producao/prod-barra-producao.component';
import { ProdBarraReimpressaoComponent } from './components/pages/prod-barra-reimpressao/prod-barra-reimpressao.component';
import { ProdBarraAvulsasComponent } from './components/pages/prod-barra-avulsas/prod-barra-avulsas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { MatIconModule  } from '@angular/material/icon'
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ProdBarraComponent,
    ProdRoloComponent,
    ProdFiomaqComponent,
    ProdEndirComponent,
    ProdBarraProducaoComponent,
    ProdBarraReimpressaoComponent,
    ProdBarraAvulsasComponent,
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    PoModule,
    HttpClientModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary){
    library.addIcons(faWifi3)
  }
 }
