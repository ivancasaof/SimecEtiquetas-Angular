import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prod-barra',
  templateUrl: './prod-barra.component.html',
  styleUrls: ['./prod-barra.component.css']
})
export class ProdBarraComponent {
  constructor(private router : Router){
    this.redirect()
  }
  
  redirect(){
    this.router.navigate(['/prod-barra/prod-barra-producao'])
  }
  
}
