import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaesperaPage } from './listaespera.page';

describe('ListaesperaPage', () => {
  let component: ListaesperaPage;
  let fixture: ComponentFixture<ListaesperaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaesperaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
