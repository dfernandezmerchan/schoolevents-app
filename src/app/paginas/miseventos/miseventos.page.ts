import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBadge,
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

@Component({
  selector: 'app-miseventos',
  templateUrl: './miseventos.page.html',
  styleUrls: ['./miseventos.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, TarjetaeventocomprimidaComponent, IonBadge, IonIcon, HeaderComponent, IonSegment, IonSegmentButton, IonLabel]
})
export class MiseventosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
