import { Component, OnInit } from '@angular/core';
import {IonButton, IonCard, IonCardContent, IonIcon} from "@ionic/angular";

@Component({
  selector: 'app-tarjetaeventocomprimida',
  templateUrl: './tarjetaeventocomprimida.component.html',
  styleUrls: ['./tarjetaeventocomprimida.component.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon
  ],
})
export class TarjetaeventocomprimidaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
