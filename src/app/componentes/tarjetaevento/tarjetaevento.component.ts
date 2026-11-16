import { Component, OnInit } from '@angular/core';
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonIcon, IonItem,
  IonLabel
} from "@ionic/angular";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjetaevento',
  templateUrl: './tarjetaevento.component.html',
  styleUrls: ['./tarjetaevento.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonButton,
    IonLabel,
    IonAvatar,
    IonItem,
    IonIcon,
    RouterLink
  ],
})
export class TarjetaeventoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
