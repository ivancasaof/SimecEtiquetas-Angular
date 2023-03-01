import { Component } from '@angular/core';
import { Producao } from 'src/app/Producao';
import { ProducaoService } from 'src/app/services/producao.service';

@Component({
  selector: 'app-prod-barra-reimpressao',
  templateUrl: './prod-barra-reimpressao.component.html',
  styleUrls: ['./prod-barra-reimpressao.component.css']
})
export class ProdBarraReimpressaoComponent {
  prod: Producao[] = [];

  color = 'primary'
  diameter = 60;
  stroke = 3;
  
  isLoaded:boolean=false;

  constructor(private producaoservice: ProducaoService){
    this.producao()
  }
  
  producao(): void{
    this.producaoservice.producao_reimp().subscribe((resultado: any)=>(
      this.prod = resultado.data,
      this.isLoaded = true
    ))
  }  

}
