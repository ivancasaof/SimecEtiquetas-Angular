import { Component } from '@angular/core';
import { ProducaoAvulsa } from 'src/app/ProducaoAvulsa';
import { ProducaoService } from 'src/app/services/producao.service';

@Component({
  selector: 'app-prod-barra-avulsas',
  templateUrl: './prod-barra-avulsas.component.html',
  styleUrls: ['./prod-barra-avulsas.component.css']
})
export class ProdBarraAvulsasComponent {
  prod: ProducaoAvulsa[] = [];

  color = 'primary'
  diameter = 60;
  stroke = 3;
  
  isLoaded:boolean=false;

  constructor(private producaoservice: ProducaoService){
    this.producao()
  }
  
  producao(): void{
    this.producaoservice.producao_avulsas().subscribe((resultado: any)=>(
      this.prod = resultado.data,
      this.isLoaded = true
    ))
  }    

}
