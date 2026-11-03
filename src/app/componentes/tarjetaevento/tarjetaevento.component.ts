import { Component, OnInit } from '@angular/core';
import {IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle} from "@ionic/angular";

@Component({
  selector: 'app-tarjetaevento',
  templateUrl: './tarjetaevento.component.html',
  styleUrls: ['./tarjetaevento.component.scss'],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent
  ],
})
export class TarjetaeventoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
