import { Component, OnInit } from '@angular/core';
import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardContent,
  IonIcon, IonItem,
  IonLabel
} from "@ionic/angular";
import {RouterLink} from '@angular/router';
import { Input } from '@angular/core';
import { Evento } from '../../modelos/evento';
import {DatePipe} from "@angular/common";
@Component({
  selector: 'app-tarjetaevento',
  templateUrl: './tarjetaevento.component.html',
  styleUrls: ['./tarjetaevento.component.scss'],
  imports: [
    IonCard,
    IonCardContent,
    IonButton,
    IonLabel,
    IonAvatar,
    IonItem,
    IonIcon,
    RouterLink,
    DatePipe
  ],
})
export class TarjetaeventoComponent  implements OnInit {

  @Input() evento!: Evento;

  ngOnInit() {}

}
