import { Component, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonButton,
  IonContent, IonFab, IonFabButton, IonFabList,
  IonIcon,
  IonModal
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {
  heartOutline,
  location,
  alertCircleOutline,
  checkmarkCircleOutline, listOutline, peopleOutline, checkmarkOutline
} from 'ionicons/icons';

import { HeaderComponent } from "../../componentes/header/header.component";
import { FotoeventoComponent } from "../../componentes/fotoevento/fotoevento.component";
import { Evento } from '../../modelos/evento';
import { eventos } from "../../datos/evento";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-eventodetalle',
  templateUrl: './eventodetalle.page.html',
  styleUrls: ['./eventodetalle.page.scss'],
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    IonIcon,
    IonButton,
    HeaderComponent,
    FotoeventoComponent,
    IonModal,
    IonFab,
    IonFabButton,
    IonFabList,
    RouterLink
  ]
})
export class EventodetallePage implements OnInit {

  constructor() {
    addIcons({
      heartOutline,
      location,
      alertCircleOutline,
      checkmarkCircleOutline,
      peopleOutline,
      checkmarkOutline,
      listOutline
    });
  }

  id = input<string>();

  inscrito = false;

  get evento(): Evento | undefined {
    return eventos.find(e => e.id === Number(this.id()));
  }

  ngOnInit() {
  }

  modalAbierto = false;

  inscribirse() {
    this.inscrito = true;
  }

  abrirModal() {
    this.modalAbierto = true;
  }

  cerrarModal() {
    this.modalAbierto = false;
  }

  cancelarInscripcion() {
    this.inscrito = false;
    this.modalAbierto = false;
  }

}
