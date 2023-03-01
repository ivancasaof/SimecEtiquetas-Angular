import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdFiomaqComponent } from './prod-fiomaq.component';

describe('ProdFiomaqComponent', () => {
  let component: ProdFiomaqComponent;
  let fixture: ComponentFixture<ProdFiomaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdFiomaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdFiomaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
