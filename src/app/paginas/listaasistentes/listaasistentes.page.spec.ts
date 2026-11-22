import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaasistentesPage } from './listaasistentes.page';

describe('ListaasistentesPage', () => {
  let component: ListaasistentesPage;
  let fixture: ComponentFixture<ListaasistentesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaasistentesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
