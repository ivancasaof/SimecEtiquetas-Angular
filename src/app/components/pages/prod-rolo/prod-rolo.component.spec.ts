import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdRoloComponent } from './prod-rolo.component';

describe('ProdRoloComponent', () => {
  let component: ProdRoloComponent;
  let fixture: ComponentFixture<ProdRoloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdRoloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdRoloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
