import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonIcon} from '@ionic/angular';
import {homeOutline, searchOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-error404',
  templateUrl: './error404.page.html',
  styleUrls: ['./error404.page.scss'],
  imports: [IonContent, CommonModule, FormsModule, IonIcon, IonButton]
})
export class Error404Page implements OnInit {

  constructor() {
    addIcons({
      searchOutline,
      homeOutline
    });
  }

  ngOnInit() {
  }

}
