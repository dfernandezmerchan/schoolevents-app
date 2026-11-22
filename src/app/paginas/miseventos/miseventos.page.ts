import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonLabel,
  IonSegment,
  IonSegmentButton
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
  imports: [IonContent, CommonModule, FormsModule, TarjetaeventocomprimidaComponent, HeaderComponent, IonSegment, IonSegmentButton, IonLabel]
})
export class MiseventosPage implements OnInit {

  constructor() { }
  eventos: Evento[] = eventos;

  ngOnInit() {
  }

}
