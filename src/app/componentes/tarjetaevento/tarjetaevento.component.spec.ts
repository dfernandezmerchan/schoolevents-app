import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaeventoComponent } from './tarjetaevento.component';

describe('TarjetaeventoComponent', () => {
  let component: TarjetaeventoComponent;
  let fixture: ComponentFixture<TarjetaeventoComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaeventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
