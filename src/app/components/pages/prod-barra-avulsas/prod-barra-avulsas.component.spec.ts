import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBarraAvulsasComponent } from './prod-barra-avulsas.component';

describe('ProdBarraAvulsasComponent', () => {
  let component: ProdBarraAvulsasComponent;
  let fixture: ComponentFixture<ProdBarraAvulsasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBarraAvulsasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdBarraAvulsasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
