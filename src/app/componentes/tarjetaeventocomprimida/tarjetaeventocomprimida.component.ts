import {Component, Input, OnInit} from '@angular/core';
import {IonButton, IonCard, IonCardContent, IonIcon} from "@ionic/angular";
import { RouterLink } from '@angular/router';
import {Evento} from "../../modelos/evento";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-tarjetaeventocomprimida',
  templateUrl: './tarjetaeventocomprimida.component.html',
  styleUrls: ['./tarjetaeventocomprimida.component.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonButton,
    IonIcon,
    RouterLink,
    DatePipe
  ],
})
export class TarjetaeventocomprimidaComponent  implements OnInit {

  constructor() { }
  @Input() evento?: Evento;

  ngOnInit() {}

}
