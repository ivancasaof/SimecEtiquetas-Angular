import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProdBarraAvulsasComponent } from './components/pages/prod-barra-avulsas/prod-barra-avulsas.component';
import { ProdBarraProducaoComponent } from './components/pages/prod-barra-producao/prod-barra-producao.component';
import { ProdBarraReimpressaoComponent } from './components/pages/prod-barra-reimpressao/prod-barra-reimpressao.component';
import { ProdBarraComponent } from './components/pages/prod-barra/prod-barra.component';
import { ProdEndirComponent } from './components/pages/prod-endir/prod-endir.component';
import { ProdFiomaqComponent } from './components/pages/prod-fiomaq/prod-fiomaq.component';
import { ProdRoloComponent } from './components/pages/prod-rolo/prod-rolo.component';
import { AutorizadoGuard } from './_guard/autorizado.guard';
import { AutorizadoCGuard } from './_guard/autorizado-c.guard';
const routes: Routes = [
  {path:'', component: HomeComponent, canActivate:[AutorizadoGuard]},
  {path:'prod-barra',
  component: ProdBarraComponent,
  canActivateChild:[AutorizadoCGuard],
  canActivate:[AutorizadoGuard],
  children: [
    {
       path: 'prod-barra-producao',
       component: ProdBarraProducaoComponent,
    },
    {
       path: 'prod-barra-reimpressao',
       component: ProdBarraReimpressaoComponent
    },
    {
      path: 'prod-barra-avulsas',
      component: ProdBarraAvulsasComponent
    }    
  ]
  },

  {path:'prod-rolo', component: ProdRoloComponent},
  {path:'prod-fiomaquina', component: ProdFiomaqComponent},
  {path:'prod-endireitado', component: ProdEndirComponent},
  {path:'login', component: LoginComponent},  
  {path:'**', component: LoginComponent},  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
