import { Component, OnInit } from '@angular/core';
import {IonButton, IonCard, IonCardContent, IonIcon} from "@ionic/angular";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjetaeventocomprimida',
  templateUrl: './tarjetaeventocomprimida.component.html',
  styleUrls: ['./tarjetaeventocomprimida.component.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon,
    RouterLink
  ],
})
export class TarjetaeventocomprimidaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
