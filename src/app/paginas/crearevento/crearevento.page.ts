import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonContent,
  IonIcon,
  IonInput,
  IonItem, IonSelect,
  IonSelectOption, IonTextarea
} from '@ionic/angular';
import {HeaderComponent} from "../../componentes/header/header.component";
import {addIcons} from "ionicons";
import {
  addCircleOutline,
  businessOutline,
  calendarOutline,
  documentTextOutline,
  personOutline,
  timeOutline
} from "ionicons/icons";

@Component({
  selector: 'app-crearevento',
  templateUrl: './crearevento.page.html',
  styleUrls: ['./crearevento.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, IonButton, IonIcon, IonInput, IonItem, IonSelectOption, IonSelect, IonTextarea, HeaderComponent]
})
export class CreareventoPage implements OnInit {

  constructor() {

    addIcons({
      calendarOutline,
      documentTextOutline,
      timeOutline,
      businessOutline,
      personOutline,
      addCircleOutline
    });


  }

  ngOnInit() {
  }

}
