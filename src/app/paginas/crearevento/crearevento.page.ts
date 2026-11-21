import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem, IonSelect,
  IonSelectOption, IonTextarea,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

@Component({
  selector: 'app-crearevento',
  templateUrl: './crearevento.page.html',
  styleUrls: ['./crearevento.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonIcon, IonInput, IonItem, IonSelectOption, IonSelect, IonTextarea]
})
export class CreareventoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
