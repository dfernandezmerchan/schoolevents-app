import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonTitle, IonToolbar} from '@ionic/angular';
import {CalendarioComponent} from "../../componentes/calendario/calendario.component";
import {TarjetaeventoComponent} from "../../componentes/tarjetaevento/tarjetaevento.component";
import {
  TarjetaeventocomprimidaComponent
} from "../../componentes/tarjetaeventocomprimida/tarjetaeventocomprimida.component";
import {HeaderComponent} from "../../componentes/header/header.component";
import {Evento} from "../../modelos/evento";
import {eventos} from "../../datos/evento";
@Component({
  selector: 'app-calendario-page',
  templateUrl: './calendario.page.html',
  styleUrls: ['./calendario.page.scss'],
  imports: [IonContent, IonHeader, CommonModule, FormsModule, CalendarioComponent, TarjetaeventocomprimidaComponent, HeaderComponent],
})
export class CalendarioPage {

  fechaSeleccionada: string = '';

  eventos: Evento[] = eventos;

  get eventosDelDia(): Evento[] {
    return this.eventos.filter(evento => {
      const inicio = evento.fechaini.substring(0, 10);
      const fin = evento.fechafin.substring(0, 10);

      return this.fechaSeleccionada >= inicio &&
        this.fechaSeleccionada <= fin;
    });
  }


}
