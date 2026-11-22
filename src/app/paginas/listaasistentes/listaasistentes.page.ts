import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonIcon} from '@ionic/angular';
import {HeaderComponent} from "../../componentes/header/header.component";
import {addIcons} from "ionicons";
import {checkmarkCircleOutline, peopleOutline} from "ionicons/icons";

@Component({
  selector: 'app-listaasistentes',
  templateUrl: './listaasistentes.page.html',
  styleUrls: ['./listaasistentes.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, IonIcon, HeaderComponent]
})
export class ListaasistentesPage implements OnInit {

  constructor() {
    addIcons({
      peopleOutline,
      checkmarkCircleOutline
    });
  }
  ngOnInit() {
  }

}
