import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosFormulariosComponent } from './ejercicios-formularios-component';

describe('EjerciciosFormulariosComponent', () => {
  let component: EjerciciosFormulariosComponent;
  let fixture: ComponentFixture<EjerciciosFormulariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EjerciciosFormulariosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EjerciciosFormulariosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
