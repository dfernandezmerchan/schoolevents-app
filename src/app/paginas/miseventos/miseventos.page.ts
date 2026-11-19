import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonBadge, IonButtons,
  IonContent,
  IonHeader,
  IonIcon, IonLabel,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {
  TarjetaeventocomprimidaComponent
} from "../../componentes/tarjetaeventocomprimida/tarjetaeventocomprimida.component";
import {HeaderComponent} from "../../componentes/header/header.component";
import {Evento} from "../../modelos/evento";
import { eventos } from '../../datos/evento';
@Component({
  selector: 'app-miseventos',
  templateUrl: './miseventos.page.html',
  styleUrls: ['./miseventos.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TarjetaeventocomprimidaComponent, IonBadge, IonIcon, HeaderComponent, IonSegment, IonSegmentButton, IonLabel, IonBackButton, IonButtons]
})
export class MiseventosPage implements OnInit {

  constructor() { }
  eventos: Evento[] = eventos;

  ngOnInit() {
  }

}
