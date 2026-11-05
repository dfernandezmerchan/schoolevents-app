import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import {IonButton, IonContent, IonHeader, IonRouterLink, IonTitle, IonToolbar} from '@ionic/angular';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonRouterLink, RouterLink]
})
export class PerfilPage {

  isEditing = false;

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }


}
