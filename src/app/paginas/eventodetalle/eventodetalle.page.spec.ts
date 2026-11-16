import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventodetallePage } from './eventodetalle.page';

describe('EventodetallePage', () => {
  let component: EventodetallePage;
  let fixture: ComponentFixture<EventodetallePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EventodetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
