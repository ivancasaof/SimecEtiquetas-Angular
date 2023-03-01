import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdBarraComponent } from './prod-barra.component';

describe('ProdBarraComponent', () => {
  let component: ProdBarraComponent;
  let fixture: ComponentFixture<ProdBarraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdBarraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdBarraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
