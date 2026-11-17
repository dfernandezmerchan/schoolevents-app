import { Component, OnInit } from '@angular/core';
import {IonIcon, IonItem, IonLabel} from "@ionic/angular";

@Component({
  selector: 'app-notificacion',
  templateUrl: './notificacion.component.html',
  styleUrls: ['./notificacion.component.scss'],
  imports: [
    IonLabel,
    IonIcon,
    IonItem
  ],
})
export class NotificacionComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
