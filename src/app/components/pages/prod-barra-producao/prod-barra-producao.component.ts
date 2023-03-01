import { Component } from '@angular/core';
import { Producao } from 'src/app/Producao';
import { ProducaoService } from 'src/app/services/producao.service';


@Component({
  selector: 'app-prod-barra-producao',
  templateUrl: './prod-barra-producao.component.html',
  styleUrls: ['./prod-barra-producao.component.css']
})
export class ProdBarraProducaoComponent {
  
  prodMes: Producao[] = [];
  prodDia: Producao[] = [];
  somaMes: any
  somaDia: any 
  
  color = 'primary'
  diameter = 60;
  stroke = 3;
  
  isLoaded:boolean=false;

  constructor(private producaoservice: ProducaoService){
    this.producao()
  }
  
  producao(): void{
    this.producaoservice.producao().subscribe((resultado: any)=>(
      this.prodMes = resultado.data.producaoMes,
      this.prodDia = resultado.data.producaoDia,
      this.somaMes = resultado.data.totalMes,
      this.somaMes = (this.somaMes["0"].Total)/1000,      
      
      this.somaDia =  resultado.data.totalDia,
      this.somaDia = (this.somaDia["0"].Total)/1000,      

      this.isLoaded = true

    ))
  }
}

