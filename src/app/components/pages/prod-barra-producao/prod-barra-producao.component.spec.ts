import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBarraProducaoComponent } from './prod-barra-producao.component';

describe('ProdBarraProducaoComponent', () => {
  let component: ProdBarraProducaoComponent;
  let fixture: ComponentFixture<ProdBarraProducaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBarraProducaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdBarraProducaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
