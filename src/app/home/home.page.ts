import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonIcon,
  IonSearchbar,
  IonCard,
  IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonSegment, IonSegmentButton, IonLabel, IonPopover
} from '@ionic/angular';
import {addIcons} from "ionicons";
import {water} from "ionicons/icons";
import { HeaderComponent } from "../componentes/header/header.component";
import {TarjetaeventoComponent} from "../componentes/tarjetaevento/tarjetaevento.component";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonContent, IonButton, IonSearchbar, TarjetaeventoComponent, IonSegment, IonSegmentButton, IonLabel, IonPopover, HeaderComponent],
})
export class HomePage {
  constructor() {

    addIcons({ water });

  }
}
