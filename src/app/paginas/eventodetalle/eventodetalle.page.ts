import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonIcon, IonItem,
  IonLabel, IonList,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

import { addIcons } from 'ionicons';
import {heart, heartOutline, location} from 'ionicons/icons';

import { HeaderComponent } from "../../componentes/header/header.component";
import {FotoeventoComponent} from "../../componentes/fotoevento/fotoevento.component";

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

  ngOnInit() {
  }

}
