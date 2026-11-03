import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import {addIcons} from "ionicons";
import {
  bookOutline,
  personOutline,
  pulseOutline,
  water,
  calendarOutline,
  heartOutline,
  waterOutline,
  notificationsOutline,
} from "ionicons/icons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
    addIcons({ bookOutline, waterOutline, pulseOutline, personOutline, water, calendarOutline, heartOutline, notificationsOutline });
  }
}
