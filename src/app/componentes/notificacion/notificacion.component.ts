import { Component, OnInit } from '@angular/core';
import {IonIcon, IonItem, IonLabel} from "@ionic/angular";
import {RouterLink} from "@angular/router";
import {addIcons} from "ionicons";
import {homeOutline, searchOutline, timeOutline} from "ionicons/icons";

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss'],
  imports: [
    IonLabel,
    IonIcon,
    IonItem,
    RouterLink
  ],
})
export class NotificacionComponent  implements OnInit {

  constructor() {
    addIcons({
      timeOutline
    });

  }

  ngOnInit() {}

}
