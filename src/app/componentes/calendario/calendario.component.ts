import {Component, EventEmitter, Output} from '@angular/core';
import {IonDatetime} from "@ionic/angular";

@Component({
  selector: 'app-calendario',
  standalone: true,
  templateUrl: './calendario.component.html',
  imports: [
    IonDatetime
  ],
  styleUrls: ['./calendario.component.scss']
})
export class CalendarioComponent {

  @Output() fechaSeleccionada = new EventEmitter<string>();

  seleccionarFecha(event: any) {
    const fecha = event.detail.value;

    if (fecha) {
      this.fechaSeleccionada.emit(fecha.substring(0, 10));
    }
  }

  fechasConEventos = [
    {
      date: '2026-11-25',
      textColor: 'var(--ion-color-primary-contrast)',
      backgroundColor: 'var(--ion-color-secondary)'
    },
    {
      date: '2026-12-02',
      textColor: 'var(--ion-color-primary-contrast)',
      backgroundColor: 'var(--ion-color-secondary)'
    },
    {
      date: '2026-12-18',
      textColor: 'var(--ion-color-primary-contrast)',
      backgroundColor: 'var(--ion-color-secondary)'
    }
  ];


}
