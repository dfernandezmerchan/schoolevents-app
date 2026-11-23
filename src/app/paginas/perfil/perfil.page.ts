import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonContent,
  IonIcon, IonItem, IonLabel, IonList,
  IonRouterLink,
  IonToggle,
  ToggleCustomEvent
} from '@ionic/angular';
import {addIcons} from "ionicons";
import {informationCircleOutline, logOutOutline, moonOutline, notificationsOutline} from "ionicons/icons";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, IonRouterLink, RouterLink, IonToggle, IonIcon, IonList, IonItem, IonLabel]
})
export class PerfilPage {

  constructor() {
    addIcons({
      logOutOutline,
      informationCircleOutline,
      notificationsOutline,
      moonOutline
    });
  }

  isEditing = false;

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  cambiarTema(evento: ToggleCustomEvent) {
    const activado = evento.detail.checked; // true si el interruptor está encendido
    document.documentElement.classList.toggle('ion-palette-dark', activado);
  }

}
