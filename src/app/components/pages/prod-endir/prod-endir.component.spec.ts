import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdEndirComponent } from './prod-endir.component';

describe('ProdEndirComponent', () => {
  let component: ProdEndirComponent;
  let fixture: ComponentFixture<ProdEndirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdEndirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdEndirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
