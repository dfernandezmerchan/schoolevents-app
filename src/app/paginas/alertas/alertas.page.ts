import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader, IonIcon, IonItem, IonLabel, IonList,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {NotificacionComponent} from "../../componentes/notificacion/notificacion.component";
import {HeaderComponent} from "../../componentes/header/header.component";

@Component({
  selector: 'app-alertas',
  templateUrl: './alertas.page.html',
  styleUrls: ['./alertas.page.scss'],
  imports: [IonContent, IonHeader, CommonModule, FormsModule, IonSegment, IonSegmentButton, IonLabel, IonList, NotificacionComponent, HeaderComponent]
})
export class AlertasPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
