import { Component } from '@angular/core';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonSegment,
  IonSegmentButton,
  IonLabel,
  IonPopover,
  IonFab,
  IonFabButton
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {addOutline, searchOutline} from 'ionicons/icons';

import { HeaderComponent } from "../../componentes/header/header.component";
import { TarjetaeventoComponent } from "../../componentes/tarjetaevento/tarjetaevento.component";

import { Evento } from '../../modelos/evento';
import { eventos } from '../../datos/evento';

import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonContent,
    IonButton,
    IonIcon,
    IonSearchbar,
    TarjetaeventoComponent,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonPopover,
    IonFab,
    IonFabButton,
    HeaderComponent,
    RouterLink
  ],
})
export class HomePage {

  eventos: Evento[] = eventos;

  eventosFiltrados: Evento[] = eventos;

  constructor() {
    addIcons({
      addOutline,
      searchOutline
    });
  }

  buscarEvento(event: any) {

    const texto = event.detail.value.toLowerCase();

    this.eventosFiltrados = this.eventos.filter(evento =>
      evento.titulo.toLowerCase().includes(texto)
    );

  }

}
