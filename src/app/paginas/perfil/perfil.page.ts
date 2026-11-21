import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon, IonItem, IonLabel, IonList,
  IonRouterLink,
  IonTitle,
  IonToggle,
  IonToolbar, ToggleCustomEvent
} from '@ionic/angular';
import {HeaderComponent} from "../../componentes/header/header.component";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonRouterLink, RouterLink, HeaderComponent, IonToggle, IonIcon, IonList, IonItem, IonLabel]
})
export class PerfilPage {

  isEditing = false;

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }

  cambiarTema(evento: ToggleCustomEvent) {
    const activado = evento.detail.checked; // true si el interruptor está encendido
    document.documentElement.classList.toggle('ion-palette-dark', activado);
  }

}
