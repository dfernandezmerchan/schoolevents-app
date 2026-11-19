import { Component, OnInit } from '@angular/core';
import {IonIcon, IonItem, IonLabel} from "@ionic/angular";
import {RouterLink} from "@angular/router";

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

  constructor() { }

  ngOnInit() {}

}
