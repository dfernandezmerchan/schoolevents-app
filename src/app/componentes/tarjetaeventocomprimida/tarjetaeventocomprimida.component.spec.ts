import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaeventocomprimidaComponent } from './tarjetaeventocomprimida.component';

describe('TarjetaeventocomprimidaComponent', () => {
  let component: TarjetaeventocomprimidaComponent;
  let fixture: ComponentFixture<TarjetaeventocomprimidaComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaeventocomprimidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
