import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FotoeventoComponent } from './fotoevento.component';

describe('FotoeventoComponent', () => {
  let component: FotoeventoComponent;
  let fixture: ComponentFixture<FotoeventoComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FotoeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
