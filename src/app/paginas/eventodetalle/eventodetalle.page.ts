import { Component, OnInit, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonButton,
  IonContent,
  IonIcon
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {heartOutline, location} from 'ionicons/icons';

import { HeaderComponent } from "../../componentes/header/header.component";
import {FotoeventoComponent} from "../../componentes/fotoevento/fotoevento.component";
import { Evento } from '../../modelos/evento';
import {eventos} from "../../datos/evento";

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
  ]
})
export class EventodetallePage implements OnInit {

  constructor() {
    addIcons({
      heartOutline,
      location
    });
  }

  id = input<string>();

  get evento(): Evento | undefined {
    return eventos.find(e => e.id === Number(this.id()));
  }

  ngOnInit() {
  }

}
