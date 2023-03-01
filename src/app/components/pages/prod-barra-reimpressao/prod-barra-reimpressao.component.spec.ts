import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBarraReimpressaoComponent } from './prod-barra-reimpressao.component';

describe('ProdBarraReimpressaoComponent', () => {
  let component: ProdBarraReimpressaoComponent;
  let fixture: ComponentFixture<ProdBarraReimpressaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBarraReimpressaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdBarraReimpressaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
