import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonIcon} from '@ionic/angular';
import {HeaderComponent} from "../../componentes/header/header.component";
import {addIcons} from "ionicons";
import {timeOutline} from "ionicons/icons";

@Component({
  selector: 'app-listaespera',
  templateUrl: './listaespera.page.html',
  styleUrls: ['./listaespera.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, IonIcon, HeaderComponent]
})
export class ListaesperaPage implements OnInit {

  constructor() {
    addIcons({
      timeOutline
    });
  }
  ngOnInit() {
  }

}
